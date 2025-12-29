import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * E2E Test Page
 * This page was created via the MCP Gateway E2E test workflow.
 * It demonstrates the full round-trip of:
 * 1. Cloning a repository
 * 2. Creating a branch
 * 3. Making code changes
 * 4. Committing and pushing
 */
const E2ETest = () => {
  const testInfo = {
    createdAt: new Date().toISOString(),
    testId: "testing_E2E",
    gateway: "MCP Gateway",
    version: "1.0.0"
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">E2E Test Page</CardTitle>
              <Badge variant="secondary">MCP Gateway Test</Badge>
            </div>
            <CardDescription>
              This page was automatically created via the MCP Gateway E2E testing workflow.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Test ID</p>
                <p className="font-mono">{testInfo.testId}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Gateway</p>
                <p className="font-mono">{testInfo.gateway}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Version</p>
                <p className="font-mono">{testInfo.version}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Created At</p>
                <p className="font-mono text-xs">{testInfo.createdAt}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Test Workflow Steps:</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Repository cloned via git.clone</li>
                <li>Branch created via git.branch.create</li>
                <li>Files created via fs.write</li>
                <li>Changes staged via git.add</li>
                <li>Changes committed via git.commit</li>
                <li>Changes pushed via git.push</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default E2ETest;
