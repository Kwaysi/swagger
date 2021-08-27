module.exports = {
  '/': {
    get: {
      summary: 'Gets all charges',
      description: 'returns charges filtered by specified filters',
      parameters: [
        { in: 'query', name: 'to', type: 'string', required: false },

        { in: 'query', name: 'page', type: 'string', required: false },
        { in: 'query', name: 'size', type: 'string', required: false },
        { in: 'query', name: 'email', type: 'string', required: false },
      ],
      responses: {
        200: {
          description: 'Successful',
          schema: {
            type: 'object',
            properties: {
              status: { type: 'boolean' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {},
              },
            },
          },
        },
        400: {
          description: 'Failed',
          schema: {
            type: 'object',
            properties: {
              status: { type: 'boolean' },
              message: { type: 'string' },
              data: null,
            },
          },
        },
      },
    },
  },
  '/{type}': {
    get: {
      summary: 'Gets all charges',
      description: 'returns charges filtered by specified filters',
      parameters: [
        { in: 'query', name: 'to', type: 'string', required: false },
        { in: 'path', name: 'from', type: 'string', required: false },
        {
          in: 'body',
          name: 'body',
          schema: {
            type: 'object',
            properties: {
              amount: { type: 'number' },
              chargeId: { type: 'string' },
            },
          },
        },
        { in: 'query', name: 'size', type: 'string', required: false },
        { in: 'query', name: 'email', type: 'string', required: false },
      ],
      responses: {
        200: {
          description: 'Successful',
          schema: {
            type: 'object',
            properties: {
              status: { type: 'boolean' },
              message: { type: 'string' },
              data: {
                type: 'object',
                properties: {},
              },
            },
          },
        },
        400: {
          description: 'Failed',
          schema: {
            type: 'object',
            properties: {
              status: { type: 'boolean' },
              message: { type: 'string' },
              data: null,
            },
          },
        },
      },
    },
  },
};
