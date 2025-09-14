import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface DataPoint {
  time: string;
  throughput: number;
  latency: number;
}

export function PerformanceChart() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Initialize with some data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: new Date(Date.now() - (19 - i) * 5000).toLocaleTimeString(),
      throughput: 45000 + Math.random() * 10000,
      latency: 2 + Math.random() * 3,
    }));
    setData(initialData);

    const interval = setInterval(() => {
      setData(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString(),
          throughput: 45000 + Math.random() * 10000,
          latency: 2 + Math.random() * 3,
        };
        return [...prev.slice(1), newPoint];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              yAxisId="throughput"
              orientation="left"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              yAxisId="latency"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Line 
              yAxisId="throughput"
              type="monotone" 
              dataKey="throughput" 
              stroke="hsl(var(--stream-primary))"
              strokeWidth={2}
              dot={false}
            />
            <Line 
              yAxisId="latency"
              type="monotone" 
              dataKey="latency" 
              stroke="hsl(var(--stream-accent))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center gap-6 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-px bg-stream-primary"></div>
          <span>Throughput (events/sec)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-px bg-stream-accent"></div>
          <span>Latency (ms)</span>
        </div>
      </div>
    </Card>
  );
}