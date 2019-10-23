const net = require('net');


const connect = () => {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });

  conn.setEncoding('utf8');

  // conn.on('data', (data) => {
  //   console.log(data);
  // });
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