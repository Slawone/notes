/**
 * @typedef {import('./types').RouteOpts} RouteOpts
 */

/**
 * @function initController
 * @description initializes the controller and returns an array of routes.
 * @param {object} diContainer
 * @returns {RouteOpts[]}
 */

export const initController = (diContainer) => {
  const service = diContainer.service.note;

  return [
    /**
     * @method Get
     * @route /notes
     * @description getting notes data
     */

    {
      method: 'GET',
      url: '/notes',
      handler: async (req, reply) => {
        const notes = await service.getAllNotes();
        console.log(notes);
        
        reply.send({ notes });
      },
    },
  ];
};
