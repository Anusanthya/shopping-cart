var JasmineConsoleReporter = require('jasmine-console-reporter');

var consoleReporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 1,
  verbosity: 4,
  listStyle: 'indent',
  activity: false
});

jasmine.getEnv().addReporter(consoleReporter);
