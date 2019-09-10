export class NotFoundError extends Error {

  constructor(message = 'Not Found Error') {
    super(message);
  }
}
