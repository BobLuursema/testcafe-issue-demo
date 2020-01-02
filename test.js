import { Selector } from "testcafe";

fixture("Issue test");

test("test", async t => {
  await t.navigateTo(`file:///${process.cwd()}/test.html`);
  await t.typeText(Selector("input"), "an.email@example.com").debug();
});
