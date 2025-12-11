/**
 * @typedef {import('./types').DbPool} DbPool
 * @typedef {import('./types').NoteForDb} CreateNote
 * @typedef {import('./types').NoteFromDb} Note
 */

export class Model {
  /**
   * @description stores a reference to the pool in a class property
   * @param {DbPool} dbPool
   */

  constructor(dbPool) {
    this.pool = dbPool;
  }

  /**
   * @description gets all records from the database
   * @function getNotes
   * @return {Promise<Note[]>}
   */

  async getNotes() {
    const sql = 'SELECT * FROM "Notes"';
    const queryResult = await this.pool.query(sql);
    const notes = queryResult.rows ?? null;

    if (!notes) throw new Error('no data in the database');
    return notes;
  }
};
