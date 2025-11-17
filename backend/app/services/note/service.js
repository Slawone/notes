import { Model } from './model.js';
import { toPartial } from '../../utils/transforms/toPartial.js';

/**
 * @typedef {import('./types').NoteFromDb} Note
 * @typedef {import('./types').DbPool} DbPool
 */

/**
 * @function getAllNotes
 * @description gets all records from the database
 * @param {object} deps
 * @returns {Promise<Note[]>}
 */

const getAllNotes = async (deps) => {
  const notes = await deps.model.getNotes();
  return notes;
};

/**
 * @function initDeps
 * @description initialized depending on the service
 * @param {DbPool} props - {dbPool: Pool}
 * @returns {object}
 */

export const initDeps = (props) => ({
  model: new Model(props),
});

/**
 * @function initService
 * @description
 * @param {object} deps
 * @returns {object} service
 */

export const initService = (deps) => ({
  getAllNotes: toPartial(getAllNotes, deps),
});
