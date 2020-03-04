export default class ErrorRepository {
  constructor() {
    this.error = new Map();
    this.error.set(400, 'Bad Request');
    this.error.set(403, 'Forbidden');
    this.error.set(404, 'Not Found');
  }

  translate(code) {
    if (!this.error.has(code)) {
      throw new Error('Unknown error');
    } else {
      return this.error.get(code);
    }
  }
}
