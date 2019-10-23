let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput(stdin);


  return stdin;
};
const handleUserInput = (key) => {
  key.on('data', data => {
    if (data === '\u0003') {
      process.exit();
    }
    if (data === 'w') {
      connection.write('Name: BGH');
      connection.write('Move: up');
    }
    if (data === 's') {
      connection.write('Name: BGH');
      connection.write('Move: left');
    }
    if (data === 'd') {
      connection.write('Name: BGH');
      connection.write('Move: down');
    }
    if (data === 'f') {
      connection.write('Name: BGH');
      connection.write('Move: right');
    }
    if (data === 'p') {
      connection.write('Say: Hey');
    }
  });
};
module.exports = { setupInput };