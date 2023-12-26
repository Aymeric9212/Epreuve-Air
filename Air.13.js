const { execSync } = require('child_process');
const fs = require('fs');

const exercises = Array.from({ length: 13 }, (_, index) => `air.${index < 10 ? '0' : ''}${index}.js`);

let totalSuccess = 0;
let totalTests = 0;

function printResult(testFile, success) {
  const color = success ? '\x1b[32m' : '\x1b[31m'; // Green for success, red for failure
  const resetColor = '\x1b[0m';

  console.log(`  ${color}${testFile}: ${success ? 'success' : 'failure'}${resetColor}`);
}

for (const testFile of exercises) {
  if (fs.existsSync(testFile)) {
    try {
      execSync(`node ${testFile}`);
      printResult(testFile, true);
      totalSuccess++;
    } catch (error) {
      printResult(testFile, false);
    }
    totalTests++;
  } else {
    console.log(`  ${testFile}: Test file not found`);
  }
}

console.log(`\nTotal success: (${totalSuccess}/${totalTests})`);
