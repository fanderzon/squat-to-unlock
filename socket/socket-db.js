import objectAssign from 'object-assign';

export class SocketDb {
  constructor( socket, rethinkdb ) {
    this.socket = socket;
    this.rethinkdb = rethinkdb;
    this._callbacks = {};
    this._requestId = 0;

    this.socket.on( 'db', this.receive.bind(this) );
  }

  get requestId() {
    return this._requestId++;
  }

  addCallback( id, callback ) {
    this._callbacks[id] = callback;
  }

  runCallback( id = null, payload = null ) {
    if ( this._callbacks[id] ) {
      this._callbacks[id]( payload );
    }
  }

  send( method, payload, callback ) {
    const requestId = this.requestId;

    addCallback( requestId, callback );
    this.socket.emit(
      'db', {
        requestId,
        method,
        payload
      }
    );
  }

  sendCallback( receivedId, payload ) {
    this.socket.emit(
      'db', {
        receivedId,
        payload
      }
    );
  }

  receive( request ) {
    console.log('socketdb receive', request);
    this.runCallback( request.receivedId, request.payload );

    if (request.method && this[request.method]) {
      this[request.method](
        request.payload,
        ( payload ) => {
          this.sendCallback( request.requestId, payload )
        }
      );
    }
  }

  createUser( user = { username: '', avatar: '' }, callback ) {
    console.log('creating new user', user);
    this.rethinkdb.r.
      table('users').
      insert(user).
      run(
        this.rethinkdb.connection,
        ( err, result ) => {
          if (err) throw err;
          console.log(JSON.stringify(result, null, 2));
          if (callback) {
            callback( result );
          }
        }
      );
  }

  getUser( id, callback ) {
    this.rethinkdb.r.
      table('users').
      get( id ).
      run(
        this.rethinkdb.connection,
        ( err, result ) => {
          console.log('getUser ', result);
          if (err) throw err;
          if (callback) {
            callback( result );
          }
        }
      );
  }
}
