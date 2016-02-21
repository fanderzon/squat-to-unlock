import objectAssign from 'object-assign';
import { Promise } from 'es6-promise';

export class ClientDb {
  constructor( socket ) {
    this.socket = socket;
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
    console.log( 'client send', arguments );
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

  receive( request ) {
    console.log( 'client receive', request );
    this.runCallback( request.receivedId, request.payload );

    if (request.method && this[request.method]) {
      this[request.method](request.payload);
    }
  }

  createUser( user = { username: '', avatar: '' } ) {
    console.log('createUser', user);
    return this.send(
      'createUser',
      user
    );
  }
}
