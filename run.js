const createTestCafe = require("testcafe");

createTestCafe("localhost")
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();
    return (
      runner
        .src("test.js")
        .browsers('chrome --user-agent="testcafe"') /* Does not work */
        //.browsers('chrome --user-agent="AppleWebKit"') /* Works */
        //.browsers("chrome") /* Works */
        .run({
          debugOnFail: true
        })
    );
  })
  .then(failed => {
    testcafe.close();
    process.exit(failed);
  });
