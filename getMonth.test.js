const getMonth = require('./task/task_01');

describe("Выводим название месяца по числу", () => {
   it("Ожидаем 'Май'", () => {
      const result = getMonth(5);
      expect(result).toBe('Май')
   }),
   it("Ожидаем 'Январь'", () => {
      const result = getMonth(1);
      expect(result).toBe('Январь')
   }),
   it("Ожидаем 'Февраль'", () => {
      const result = getMonth(2);
      expect(result).toBe('Февраль')
   }),
   it("Ожидаем 'Вы ввели неверные данные'", () => {
      const result = getMonth(111);
      expect(result).toBe('Вы ввели неверные данные')
   }),
   it("Ожидаем Ошибочный тест", () => {
      const result = getMonth(1);
      expect(result).toBe('Вы ввели неверные данные')
   })
})