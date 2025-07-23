// file validate disini untuk memvalidasi schema dengan request yang dikirimkan

import { ResponseError } from "../error/response-error.js";

const validate = (schema, request) => {
  // validate disini berasal dari joi
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  });

  if (result.error) {
    throw new ResponseError(404, result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
