/********************************************
  Infra
********************************************/

import { initDb } from './infra/db/index.js';

const dbPool = initDb();
const infra = { dbPool };

/********************************************
  Note
********************************************/

import { initDeps as initNoteDeps } from './services/note/service.js';
import { initService as initNoteService } from './services/note/service.js';

const noteProps = { dbPool };
const noteDeps = initNoteDeps(noteProps);
const noteService = initNoteService(noteDeps);

/********************************************
  Service
********************************************/

const service = {
  note: noteService,
};

export const diContainer = {
  infra,
  service,
};
