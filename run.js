const createTestCafe = require("testcafe");

createTestCafe("localhost")
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();
    return (
      runner
        .src("test.js")
        .browsers('chrome --user-agent="testcafe"')
        //.browsers("chrome")
        .run({
          debugOnFail: true
        })
    );
  })
  .then(failed => {
    testcafe.close();
    process.exit(failed);
  });
