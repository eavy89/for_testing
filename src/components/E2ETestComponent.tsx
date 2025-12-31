import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

interface TestStatus {
  id: string;
  name: string;
  status: "passed" | "failed" | "pending";
  duration?: number;
}

export const E2ETestComponent = () => {
  const [tests, setTests] = useState<TestStatus[]>([
    { id: "1", name: "Gateway Connection", status: "passed", duration: 45 },
    { id: "2", name: "Git Clone Operation", status: "passed", duration: 1200 },
    { id: "3", name: "Branch Creation", status: "passed", duration: 89 },
    { id: "4", name: "File Modifications", status: "pending" },
    { id: "5", name: "Lint Check", status: "pending" },
    { id: "6", name: "Build Process", status: "pending" },
    { id: "7", name: "Git Push", status: "pending" },
  ]);

  const [runCount, setRunCount] = useState(0);

  const runTests = () => {
    setRunCount(prev => prev + 1);
    setTests(prev => prev.map((test, idx) => ({
      ...test,
      status: Math.random() > 0.1 ? "passed" : "failed",
      duration: Math.floor(Math.random() * 2000) + 50
    })));
  };

  const getStatusIcon = (status: TestStatus["status"]) => {
    switch (status) {
      case "passed": return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "failed": return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "pending": return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusBadge = (status: TestStatus["status"]) => {
    const variants = {
      passed: "bg-green-100 text-green-800",
      failed: "bg-red-100 text-red-800",
      pending: "bg-yellow-100 text-yellow-800"
    };
    return <Badge className={variants[status]}>{status.toUpperCase()}</Badge>;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🧪 E2E Test Report #7
        </CardTitle>
        <CardDescription>
          MCP Gateway End-to-End Testing Dashboard
          <br />
          <span className="text-xs text-muted-foreground">
            Test Date: {new Date().toISOString().split("T")[0]} | Run Count: {runCount}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tests.map(test => (
            <div
              key={test.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(test.status)}
                <span className="font-medium">{test.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {test.duration && (
                  <span className="text-sm text-muted-foreground">
                    {test.duration}ms
                  </span>
                )}
                {getStatusBadge(test.status)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button onClick={runTests} size="lg">
            Run E2E Tests
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default E2ETestComponent;
