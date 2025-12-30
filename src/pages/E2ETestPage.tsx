import { motion } from "framer-motion";

const E2ETestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 rounded-lg shadow-lg bg-card"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">
          E2E Test Page
        </h1>
        <p className="text-muted-foreground mb-6">
          This page was created during E2E testing of the MCP Gateway.
        </p>
        <div className="flex gap-4 justify-center">
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary">
            Branch: testing_E2E_2
          </span>
          <span className="px-4 py-2 bg-green-500/10 rounded-full text-green-500">
            Status: Active
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default E2ETestPage;
