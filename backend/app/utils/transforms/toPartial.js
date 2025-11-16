/**
 * @template {Function} F
 * @param {F} fn
 * @param {object} deps
 * @returns {Function}
 */

export const toPartial = (fn, deps) => (/** @type {any} */ ...args) => fn(deps, ...args);
