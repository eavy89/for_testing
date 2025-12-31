/**
 * E2E Test Utilities
 * 
 * Created during testing_E2E_6 branch for MCP Gateway E2E testing
 */

export interface TestResult {
  testName: string;
  timestamp: Date;
  success: boolean;
  details?: string;
}

export class E2ETestLogger {
  private results: TestResult[] = [];

  logTest(testName: string, success: boolean, details?: string): void {
    this.results.push({
      testName,
      timestamp: new Date(),
      success,
      details
    });
    console.log(`[E2E Test] ${testName}: ${success ? "PASS" : "FAIL"}`, details || "");
  }

  getResults(): TestResult[] {
    return this.results;
  }

  getSummary(): { total: number; passed: number; failed: number } {
    const total = this.results.length;
    const passed = this.results.filter(r => r.success).length;
    const failed = total - passed;
    return { total, passed, failed };
  }
}

export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const generateTestReport = (logger: E2ETestLogger): string => {
  const summary = logger.getSummary();
  return `
E2E Test Report
===============
Total Tests: ${summary.total}
Passed: ${summary.passed}
Failed: ${summary.failed}
Success Rate: ${((summary.passed / summary.total) * 100).toFixed(2)}%
  `;
};
