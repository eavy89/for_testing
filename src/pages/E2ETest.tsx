import E2ETestComponent from "@/components/E2ETestComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const E2ETest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            MCP Gateway E2E Testing
          </h1>
          <p className="text-muted-foreground">
            Comprehensive end-to-end testing for the MCP Gateway service
          </p>
        </div>

        <E2ETestComponent />

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Test Environment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Gateway IP:</span>
                <span className="ml-2 text-muted-foreground">34.78.176.99</span>
              </div>
              <div>
                <span className="font-medium">Branch:</span>
                <span className="ml-2 text-muted-foreground">testing_E2E_7</span>
              </div>
              <div>
                <span className="font-medium">Container OS:</span>
                <span className="ml-2 text-muted-foreground">Debian 12 (bookworm)</span>
              </div>
              <div>
                <span className="font-medium">Test Date:</span>
                <span className="ml-2 text-muted-foreground">December 31, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Created via MCP Gateway E2E Test #7</p>
          <p>Repository ID: d00e86ed-f983-42fe-9470-511bfc49a0a8</p>
        </div>
      </div>
    </div>
  );
};

export default E2ETest;
