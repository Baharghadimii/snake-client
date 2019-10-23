const net = require('net');

const setupInput = function () {
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
  });
};

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });

  conn.setEncoding('utf8');

  setupInput();


  conn.on('data', (data) => {
    console.log(data);
  });
  // conn.on('connect', () => {
  //   console.log('Successfully connected to game server');
  //   conn.write('Name: BGH');
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 500);
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 700);
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 900);
  //   setTimeout(() => {
  //     conn.write('Move: right');
  //   }, 1100);
  //   setTimeout(() => {
  //     conn.write('Move: right');
  //   }, 1300);
  //   setTimeout(() => {
  //     conn.write('Move: right');
  //   }, 1500);

  // });

  return conn;



};
module.exports = {
  connect,
};