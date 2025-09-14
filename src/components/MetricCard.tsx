import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({ title, value, unit, change, icon, className }: MetricCardProps) {
  return (
    <Card className={cn(
      "p-6 border-border bg-card/50 backdrop-blur-sm relative overflow-hidden",
      "hover:border-stream-primary/50 transition-all duration-300",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-stream-primary/5 to-transparent" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {icon && <div className="text-stream-primary">{icon}</div>}
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground animate-counter">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
        
        {change !== undefined && (
          <div className={cn(
            "flex items-center gap-1 mt-2 text-xs",
            change >= 0 ? "text-stream-accent" : "text-stream-danger"
          )}>
            <span>{change >= 0 ? "↗" : "↘"}</span>
            <span>{Math.abs(change).toFixed(1)}% from last hour</span>
          </div>
        )}
      </div>
    </Card>
  );
}