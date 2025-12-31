import { TestComponent } from "@/components/TestComponent";

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          E2E Test Page
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          This page was created to test the MCP Gateway functionality
        </p>
        <TestComponent />
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Test Information</h2>
          <div className="space-y-2 text-sm">
            <p>📝 <strong>Test Name:</strong> E2E_6</p>
            <p>🌿 <strong>Branch:</strong> testing_E2E_6</p>
            <p>🔧 <strong>Gateway:</strong> MCP Gateway @ 34.78.176.99</p>
            <p>⚛️ <strong>Stack:</strong> React + TypeScript + Vite + shadcn/ui</p>
            <p>📦 <strong>Package Manager:</strong> pnpm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
