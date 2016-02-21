import objectAssign from 'object-assign';
import { Promise } from 'es6-promise';

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

  send( method, payload ) {
    const requestId = this.requestId;

    return new Promise( ( resolve, reject ) => {
      this.addCallback( requestId, resolve );

      this.socket.emit(
        'db', {
          requestId,
          method,
          payload
        }
      );
    });
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
        request.payload
      ).
        then( payload => {
          this.sendCallback( request.requestId, payload );
        });
    }
  }

  createUser( user = { username: '', avatar: '' } ) {

    return new Promise( ( resolve, reject ) => {
      this.rethinkdb.r.
        table('users').
        insert(user).
        run(
          this.rethinkdb.connection,
          ( err, result ) => {
            if (err) reject( err );

            if (result && result.generated_keys && result.generated_keys[0] ) {
              this.getUser( result.generated_keys[0] ).then(( result ) => {
                resolve(result);
              });
            }
          }
        );
    });
  }

  getUser( id ) {
    return new Promise(( resolve, reject ) => {
      this.rethinkdb.r.
        table('users').
        get( id ).
        run(
          this.rethinkdb.connection,
          ( err, result ) => {
            if (err) reject( err );
            resolve( result );
          }
        );
    });
  }
}
