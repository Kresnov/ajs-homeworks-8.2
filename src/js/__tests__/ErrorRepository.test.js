import ErrorRepository from '../ErrorRepository.js';

test('Успех', () => {
  const received = new ErrorRepository();
  expect(received.translate(400)).toBe('Bad Request');
});

test('Неизвестная ошибка', () => {
  const received = new ErrorRepository();
  expect(() => received.translate(401)).toThrow('Unknown error');
});
