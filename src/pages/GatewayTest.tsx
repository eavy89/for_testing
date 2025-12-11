import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { runGatewayTest, formatTestResult, APP_VERSION, GatewayTestResult } from "@/lib/mcp-gateway-test";

const GatewayTest = () => {
  const [result, setResult] = useState<GatewayTestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRunTest = async () => {
    setLoading(true);
    try {
      const testResult = await runGatewayTest();
      setResult(testResult);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>MCP Gateway Test</CardTitle>
            <CardDescription>
              This page was created via the MCP Gateway E2E test workflow.
              Version: {APP_VERSION}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleRunTest} disabled={loading}>
              {loading ? "Running..." : "Run Gateway Test"}
            </Button>
            
            {result && (
              <div className={`p-4 rounded-lg ${result.success ? "bg-green-100" : "bg-red-100"}`}>
                <pre className="text-sm">{formatTestResult(result)}</pre>
              </div>
            )}
            
            <div className="text-sm text-gray-500 mt-4">
              <p>✨ This demonstrates the MCP Gateway can:</p>
              <ul className="list-disc list-inside ml-2 mt-2">
                <li>Clone repositories</li>
                <li>Create branches</li>
                <li>Create and edit files</li>
                <li>Run lint and build commands</li>
                <li>Commit and push changes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GatewayTest;
