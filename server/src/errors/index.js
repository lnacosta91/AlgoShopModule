import logger from '../config/logger'

export class AuthentificationError extends Error {
  code = 401
  message = 'Autentification not found, you have to be authentificated to perform this action'
  constructor(){
    super()
    logger.error(this.stack)
  }
}

export class DatabaseError extends Error {
  code = 404;
  message = 'Resource not found : ' + message;
  constructor(message){
    super(message);
    logger.error(this.stack)
  }
}

export class WrongArgumentsError extends Error {
  code = 400;
  message = 'Wrong arguments : ' + message;
  constructor(message){
    super(message);
    logger.error(this.stack)
  }
}

export class ServiceUnavailableError extends Error {
  code = 503;
  message = 'At least one service is unresponding ' + message;
  constructor(message){
    super(message)
    logger.error(this.stack)
  }
}

export class KeyVaultError extends Error {
  code = 500;
    message = 'KeyVault Internal Error: ' + message;
  constructor(message){
    super(message);
    logger.error(this.stack)
  }
}
