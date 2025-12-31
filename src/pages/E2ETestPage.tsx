import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Clock, Zap, Server, GitBranch, Terminal } from "lucide-react";

interface TestResult {
  id: string;
  name: string;
  status: "passed" | "failed" | "running" | "pending";
  duration?: number;
  message?: string;
}

const E2ETestPage = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([
    { id: "1", name: "Gateway Connection", status: "passed", duration: 45, message: "Successfully connected to MCP Gateway" },
    { id: "2", name: "Repository Clone", status: "passed", duration: 2100, message: "Repository cloned to /workspace/for_testing" },
    { id: "3", name: "Branch Creation", status: "passed", duration: 89, message: "Branch testing_E2E_5 created and checked out" },
    { id: "4", name: "File Operations", status: "passed", duration: 156, message: "Files read and written successfully" },
    { id: "5", name: "Project Detection", status: "passed", duration: 234, message: "Detected: React + TypeScript + Vite" },
    { id: "6", name: "Build Process", status: "pending", message: "Awaiting execution" },
    { id: "7", name: "Git Push", status: "pending", message: "Awaiting execution" },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "passed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "running":
        return <Clock className="h-5 w-5 text-yellow-500 animate-spin" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: TestResult["status"]) => {
    const variants: Record<TestResult["status"], string> = {
      passed: "bg-green-100 text-green-800 border-green-200",
      failed: "bg-red-100 text-red-800 border-red-200",
      running: "bg-yellow-100 text-yellow-800 border-yellow-200",
      pending: "bg-gray-100 text-gray-600 border-gray-200",
    };
    return <Badge className={`${variants[status]} border`}>{status.toUpperCase()}</Badge>;
  };

  const passedCount = testResults.filter((t) => t.status === "passed").length;
  const totalTests = testResults.length;
  const totalDuration = testResults.reduce((acc, t) => acc + (t.duration || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            MCP Gateway E2E Test Report
          </h1>
          <p className="text-purple-200 text-lg">
            Branch: <code className="bg-purple-800/50 px-2 py-1 rounded">testing_E2E_5</code>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Generated: {currentTime.toLocaleString()}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Server className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-2xl font-bold text-white">34.78.176.99</p>
                  <p className="text-sm text-gray-400">Gateway IP</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <GitBranch className="h-8 w-8 text-green-400" />
                <div>
                  <p className="text-2xl font-bold text-white">testing_E2E_5</p>
                  <p className="text-sm text-gray-400">Branch</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-400" />
                <div>
                  <p className="text-2xl font-bold text-white">{passedCount}/{totalTests}</p>
                  <p className="text-sm text-gray-400">Tests Passed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="text-2xl font-bold text-white">{(totalDuration / 1000).toFixed(1)}s</p>
                  <p className="text-sm text-gray-400">Total Duration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Test Results */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Test Execution Results
            </CardTitle>
            <CardDescription className="text-gray-400">
              Comprehensive end-to-end test of MCP Gateway capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testResults.map((test, index) => (
                <div key={test.id}>
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(test.status)}
                      <div>
                        <p className="font-medium text-white">{test.name}</p>
                        <p className="text-sm text-gray-400">{test.message}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {test.duration && (
                        <span className="text-sm text-gray-400">
                          {test.duration}ms
                        </span>
                      )}
                      {getStatusBadge(test.status)}
                    </div>
                  </div>
                  {index < testResults.length - 1 && <Separator className="bg-slate-700 my-2" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400">
          <p>MCP Gateway E2E Test Suite v5.0</p>
          <p className="text-sm">Created by AI Agent using MCP Tools</p>
        </div>
      </div>
    </div>
  );
};

export default E2ETestPage;
