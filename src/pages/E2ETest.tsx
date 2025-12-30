/**
 * E2E Test Page
 * 
 * This page was added automatically by the MCP Gateway E2E test.
 * Created: 2025-12-30
 * Branch: testing_E2E_3
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const E2ETest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              🎉 E2E Test Successful!
            </CardTitle>
            <CardDescription className="text-center text-lg">
              This page was created by the MCP Gateway automated testing system.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                ✅ Test Details
              </h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Repository cloned successfully</li>
                <li>• Branch created: testing_E2E_3</li>
                <li>• Files modified and committed</li>
                <li>• Changes pushed to remote</li>
              </ul>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button variant="default" onClick={() => window.location.href = "/"}>
                Go Home
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default E2ETest;
