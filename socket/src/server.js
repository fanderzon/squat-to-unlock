import Server from 'socket.io';
import rethinkdb from 'rethinkdb';
import { SocketDb } from '../socket-db.js';

function rethink( rethinkdb ) {
  this.r = rethinkdb;
  this.connection = null;
  rethinkdb.connect({
    host: 'localhost',
    port: 28015,
    authKey: '',
    db: 'stu'
  }, ( err, connection ) => {
    if (err) {
      console.log( "Error connecting to rethink db", err );
      return;
    }
    this.connection = connection;
  });
}

const rethinkInstance = new rethink( rethinkdb );

export function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit( 'state', store.getState() )
  );

  io.on('connection', (socket) => {
    new SocketDb( socket, rethinkInstance );
    socket.emit('state', store.getState());
    socket.emit('connected', socket.id);
    socket.on('action', store.dispatch.bind(store));

    socket.on('disconnect', function () {
      console.log('client disconnected');
    });
  });

}
