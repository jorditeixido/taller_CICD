import { sum } from './calculator';
test('Debe retornar la adicion correcta de dos operandos ', () => {
  expect(sum(2, 3)).toBe(5);
});
