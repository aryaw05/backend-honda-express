// file validate disini untuk memvalidasi schema dengan request yang dikirimkan

import { ResponseError } from "../error/response-error";

const validate = (schema, request) => {
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
