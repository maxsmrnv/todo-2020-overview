export class HttpError extends Error {
  public status: number;
  constructor(statusCode: number, message?: string) {
    super(message); // 'Error' breaks prototype chain here
    this.status = statusCode;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
  userMsg = () => ({
    status: this.status,
    message: this.message,
  });
}
