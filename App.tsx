import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Commands from "@/pages/commands";
import Status from "@/pages/status";
import FAQ from "@/pages/faq";
import Docs from "@/pages/docs";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/commands" component={Commands} />
        <Route path="/status" component={Status} />
        <Route path="/docs" component={Docs} />
        <Route path="/faq" component={FAQ} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
