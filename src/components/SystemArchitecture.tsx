import { Card } from "@/components/ui/card";

export function SystemArchitecture() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <h3 className="text-lg font-semibold mb-6">System Architecture</h3>
      
      <div className="flex items-center justify-between h-32">
        {/* Kafka */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 rounded-lg bg-stream-primary/20 border border-stream-primary/50 flex items-center justify-center">
            <div className="text-xs font-mono text-stream-primary">KAFKA</div>
          </div>
          <span className="text-xs text-muted-foreground">Event Ingestion</span>
        </div>
        
        {/* Arrow 1 */}
        <div className="flex-1 relative">
          <div className="h-px bg-gradient-to-r from-stream-primary to-stream-accent"></div>
          <div className="absolute right-0 top-0 w-2 h-2 border-r border-t border-stream-accent transform rotate-45 -translate-y-1"></div>
        </div>
        
        {/* Flink */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 rounded-lg bg-stream-accent/20 border border-stream-accent/50 flex items-center justify-center">
            <div className="text-xs font-mono text-stream-accent">FLINK</div>
          </div>
          <span className="text-xs text-muted-foreground">Stream Processing</span>
        </div>
        
        {/* Arrow 2 */}
        <div className="flex-1 relative">
          <div className="h-px bg-gradient-to-r from-stream-accent to-stream-purple"></div>
          <div className="absolute right-0 top-0 w-2 h-2 border-r border-t border-stream-purple transform rotate-45 -translate-y-1"></div>
        </div>
        
        {/* Output */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 rounded-lg bg-stream-purple/20 border border-stream-purple/50 flex items-center justify-center">
            <div className="text-xs font-mono text-stream-purple">OUTPUT</div>
          </div>
          <span className="text-xs text-muted-foreground">Analytics DB</span>
        </div>
      </div>
      
      {/* Kubernetes info */}
      <div className="mt-6 p-4 bg-muted/20 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Deployment:</span>
          <span className="text-foreground font-mono">Kubernetes Cluster</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-1">
          <span className="text-muted-foreground">Auto-scaling:</span>
          <span className="text-stream-accent">Active</span>
        </div>
      </div>
    </Card>
  );
}