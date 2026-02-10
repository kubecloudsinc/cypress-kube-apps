import { CyHttpMessages } from 'cypress/types/net-stubbing';
import IncomingHttpRequest = CyHttpMessages.IncomingHttpRequest;
import IncomingHttpResponse = CyHttpMessages.IncomingHttpResponse;

export const post400Handler = (request: IncomingHttpRequest) => {
  request.continue((response: IncomingHttpResponse) => {
    // the response that need to be sent back in post
    const responseStub = {
      data: [],
      pagination: {},
    };
    response.send({ statusCode: 400, body: JSON.stringify(responseStub) });
  });
};
