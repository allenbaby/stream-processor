import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface DataPoint {
  id: string;
  timestamp: number;
  value: number;
  type: 'kafka' | 'flink' | 'output';
}

export function StreamVisualization() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint: DataPoint = {
        id: Math.random().toString(36),
        timestamp: Date.now(),
        value: Math.random() * 100,
        type: ['kafka', 'flink', 'output'][Math.floor(Math.random() * 3)] as DataPoint['type']
      };
      
      setDataPoints(prev => [...prev.slice(-20), newPoint]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getColorForType = (type: DataPoint['type']) => {
    switch (type) {
      case 'kafka': return 'bg-stream-primary';
      case 'flink': return 'bg-stream-accent';
      case 'output': return 'bg-stream-purple';
    }
  };

  return (
    <Card className="p-6 h-80 bg-card/50 backdrop-blur-sm border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Real-time Data Flow</h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-stream-primary"></div>
            <span>Kafka</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-stream-accent"></div>
            <span>Flink</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-stream-purple"></div>
            <span>Output</span>
          </div>
        </div>
      </div>
      
      <div className="relative h-full bg-muted/20 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stream-primary/10 to-transparent animate-data-flow"></div>
        
        {/* Simulated data points */}
        {dataPoints.map((point, index) => (
          <div
            key={point.id}
            className={`absolute w-3 h-3 rounded-full ${getColorForType(point.type)} animate-pulse-glow`}
            style={{
              left: `${(index / 20) * 100}%`,
              top: `${point.value}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
        
        {/* Flow lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stream-primary/50 to-transparent"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stream-accent/50 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stream-purple/50 to-transparent"></div>
      </div>
    </Card>
  );
}