const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "wonosobo wisata api ",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes*.js", "./src/apiDocs/*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = openapiSpecification;
