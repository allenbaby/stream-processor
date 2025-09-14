import { useEffect, useState } from "react";
import { MetricCard } from "@/components/MetricCard";
import { StreamVisualization } from "@/components/StreamVisualization";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { PerformanceChart } from "@/components/PerformanceChart";
import { Activity, Zap, Database, Clock } from "lucide-react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [eventsProcessed, setEventsProcessed] = useState(1247891);
  const [throughput, setThroughput] = useState(48750);
  const [latency, setLatency] = useState(2.4);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const metricsInterval = setInterval(() => {
      setEventsProcessed(prev => prev + Math.floor(Math.random() * 100));
      setThroughput(prev => 45000 + Math.random() * 10000);
      setLatency(prev => 2 + Math.random() * 3);
    }, 3000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-stream-primary to-stream-accent bg-clip-text text-transparent">
                Stream Processor Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">Real-time Event Processing • LinkedIn Scale</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">System Time</div>
              <div className="font-mono text-stream-primary">{currentTime.toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-6 py-8">
        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Events Processed"
            value={eventsProcessed}
            unit="total"
            change={12.5}
            icon={<Activity size={20} />}
          />
          <MetricCard
            title="Current Throughput"
            value={Math.round(throughput)}
            unit="events/sec"
            change={8.2}
            icon={<Zap size={20} />}
          />
          <MetricCard
            title="Avg Latency"
            value={latency.toFixed(1)}
            unit="ms"
            change={-5.3}
            icon={<Clock size={20} />}
          />
          <MetricCard
            title="Active Partitions"
            value={24}
            unit="kafka"
            change={0}
            icon={<Database size={20} />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StreamVisualization />
          <PerformanceChart />
        </div>

        {/* Architecture Row */}
        <SystemArchitecture />
      </main>
    </div>
  );
};

export default Index;
