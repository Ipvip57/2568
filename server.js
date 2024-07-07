const { PythonShell } = require('python-shell');
require('dotenv').config();

PythonShell.run('main.py', null, function (err, results) {
  if (err) throw err;
  console.log('Results:', results);
});
