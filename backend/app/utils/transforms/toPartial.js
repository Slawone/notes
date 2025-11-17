/**
 * @function toPartial
 * @description to the func
 * @param {Function} func - Функция, принимающая deps первым аргументом
 * @param {object} deps - Зависимости для внедрения
 * @returns {Function} Функция с предзаполненными зависимостями
 */

export const toPartial = (func, deps) => {
  return func.bind(null, deps);
};
