import { useQuery } from "@tanstack/react-query";
import { Activity, Server, Database, Cloud, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import type { SystemStatus, BotStats } from "@shared/schema";

export default function Status() {
  const { data: statusData = [], isLoading: statusLoading } = useQuery<SystemStatus[]>({
    queryKey: ["/api/status"],
  });

  const { data: stats, isLoading: statsLoading } = useQuery<BotStats>({
    queryKey: ["/api/stats"],
  });

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "online":
      case "operational":
      case "healthy":
        return <CheckCircle className="text-success" size={20} />;
      case "maintenance":
        return <AlertTriangle className="text-warning" size={20} />;
      default:
        return <Clock className="text-gray-400" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "online":
      case "operational":
      case "healthy":
        return "bg-success";
      case "maintenance":
        return "bg-warning";
      default:
        return "bg-gray-500";
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service.toLowerCase()) {
      case "bot":
        return <Activity className="text-white" size={24} />;
      case "api":
        return <Server className="text-white" size={24} />;
      case "database":
        return <Database className="text-white" size={24} />;
      case "cdn":
        return <Cloud className="text-white" size={24} />;
      default:
        return <Activity className="text-white" size={24} />;
    }
  };

  if (statusLoading || statsLoading) {
    return (
      <div className="min-h-screen pt-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading system status...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-dark">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">System Status</h1>
            <p className="text-xl text-gray-300">Real-time monitoring of sneeze bot services</p>
          </div>
          
          {/* Overall Status */}
          <div className="glassmorphism rounded-xl p-6 mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-success rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-success">All Systems Operational</h2>
            </div>
            <p className="text-gray-400">
              {stats && `Serving ${stats.totalUsers.toLocaleString()} users across ${stats.totalServers.toLocaleString()} servers with ${stats.uptime} uptime`}
            </p>
          </div>
          
          {/* Service Status Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statusData.map((service) => (
              <div key={service.id} className="glassmorphism rounded-lg p-6 text-center">
                <div className={`w-12 h-12 ${getStatusColor(service.status)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {getServiceIcon(service.service)}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.service}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className={`w-2 h-2 ${getStatusColor(service.status)} rounded-full`}></div>
                  <span className={`font-medium ${service.status.toLowerCase() === 'online' || service.status.toLowerCase() === 'operational' || service.status.toLowerCase() === 'healthy' ? 'text-success' : service.status.toLowerCase() === 'maintenance' ? 'text-warning' : 'text-gray-400'}`}>
                    {service.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{service.message}</p>
              </div>
            ))}
          </div>
          
          {/* Recent Incidents */}
          <div className="glassmorphism rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Recent Incidents</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-surface/50 rounded-lg">
                <div className="w-3 h-3 bg-success rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">All systems operational</h4>
                    <span className="text-sm text-gray-400">2 hours ago</span>
                  </div>
                  <p className="text-gray-400">
                    Scheduled maintenance completed successfully. All services restored to full capacity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-surface/50 rounded-lg">
                <div className="w-3 h-3 bg-warning rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">API Rate Limiting Issues</h4>
                    <span className="text-sm text-gray-400">6 hours ago</span>
                  </div>
                  <p className="text-gray-400">
                    Temporary increase in response times due to high load. Issue resolved.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-surface/50 rounded-lg">
                <div className="w-3 h-3 bg-success rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Database Optimization</h4>
                    <span className="text-sm text-gray-400">1 day ago</span>
                  </div>
                  <p className="text-gray-400">
                    Performance improvements implemented. Commands now execute 15% faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glassmorphism rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Response Time</h4>
              <div className="text-3xl font-bold text-success mb-2">45ms</div>
              <p className="text-sm text-gray-400">Average API response time</p>
            </div>
            
            <div className="glassmorphism rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Uptime</h4>
              <div className="text-3xl font-bold text-success mb-2">99.9%</div>
              <p className="text-sm text-gray-400">Last 30 days</p>
            </div>
            
            <div className="glassmorphism rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Commands/Min</h4>
              <div className="text-3xl font-bold text-success mb-2">2,847</div>
              <p className="text-sm text-gray-400">Commands executed per minute</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
