import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TestComponentProps {
  title?: string;
  description?: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({
  title = "E2E Test Component",
  description = "This component was created during E2E testing of the MCP Gateway"
}) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Counter: {counter}</p>
          <div className="flex gap-2 justify-center">
            <Button onClick={() => setCounter(counter + 1)} variant="default">
              Increment
            </Button>
            <Button onClick={() => setCounter(0)} variant="outline">
              Reset
            </Button>
          </div>
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          <p>✅ Created via MCP Gateway</p>
          <p>✅ Branch: testing_E2E_6</p>
          <p>✅ Component successfully integrated</p>
        </div>
      </CardContent>
    </Card>
  );
};
