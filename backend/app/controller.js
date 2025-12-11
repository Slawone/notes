import { initController as initNoteController } from './services/note/controller.js';

/**
 * @typedef {import('./types').RouteOpts} RouteOpts
 */

/**
 * @function initController
 * @description collects and returns all routes
 * @param {object} diContainer
 * @returns {RouteOpts[]}
 */

export const initController = (diContainer) => {
  const routes = initNoteController(diContainer);
  return [...routes];
};
