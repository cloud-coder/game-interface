/**
 * game-interface
 * game-interface-spec
 */
test.start();
test.heading('Library', function () {
  test.runnerGameInterface();
});
test.heading('Classes', function () {
  test.paragraph('These objects make up the core "classes" and are extended via javascript prototype inheritance.');
  test.runnerGameState();
  test.runnerViewPort();
  test.runnerGraphic();
});
test.heading('Models', function () {
  test.paragraph('These core models are included in the library.');
});
test.heading('Integration Tests', function () {
  test.paragraph('These set of tests run through a series of operations with multiple assertions inside each example.  ' +
    'If any assertion fails the test is failed.');
});
test.stop();
