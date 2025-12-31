/**
 * E2E Test Helper Utilities
 * Created as part of MCP Gateway E2E Test #7
 */

export interface TestResult {
  testId: string;
  testName: string;
  status: "passed" | "failed" | "skipped";
  duration: number;
  timestamp: Date;
  error?: string;
}

export interface TestSuite {
  name: string;
  tests: TestResult[];
  startTime: Date;
  endTime?: Date;
}

/**
 * Calculate test suite statistics
 */
export function calculateStats(suite: TestSuite) {
  const total = suite.tests.length;
  const passed = suite.tests.filter(t => t.status === "passed").length;
  const failed = suite.tests.filter(t => t.status === "failed").length;
  const skipped = suite.tests.filter(t => t.status === "skipped").length;
  const totalDuration = suite.tests.reduce((acc, t) => acc + t.duration, 0);

  return {
    total,
    passed,
    failed,
    skipped,
    passRate: total > 0 ? (passed / total) * 100 : 0,
    totalDuration,
    averageDuration: total > 0 ? totalDuration / total : 0,
  };
}

/**
 * Format duration in human-readable format
 */
export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(2)}s`;
  return `${(ms / 60000).toFixed(2)}m`;
}

/**
 * Generate test report summary
 */
export function generateReportSummary(suite: TestSuite): string {
  const stats = calculateStats(suite);
  return `
## Test Suite: ${suite.name}

**Summary:**
- Total Tests: ${stats.total}
- Passed: ${stats.passed} ✅
- Failed: ${stats.failed} ❌
- Skipped: ${stats.skipped} ⏭️
- Pass Rate: ${stats.passRate.toFixed(1)}%
- Total Duration: ${formatDuration(stats.totalDuration)}

**Environment:**
- Gateway: 34.78.176.99
- Branch: testing_E2E_7
- Date: ${new Date().toISOString()}
  `.trim();
}

/**
 * E2E Test Logger class for structured logging
 */
export class E2ETestLogger {
  private logs: string[] = [];

  log(message: string): void {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] INFO: ${message}`);
  }

  error(message: string): void {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ERROR: ${message}`);
  }

  warn(message: string): void {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] WARN: ${message}`);
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  clear(): void {
    this.logs = [];
  }
}
