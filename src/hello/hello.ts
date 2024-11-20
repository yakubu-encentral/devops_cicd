import { Handler } from "aws-lambda";

export const helloWorld: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello World"),
  };
};
