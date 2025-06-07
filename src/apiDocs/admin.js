/**
 *  @swagger
 * /admin/login:
 *  post:
 *      tags:
 *          - admin
 *      summary: login
 *      description: api login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           username:
 *                              type: string
 *                              example: pandu
 *                           password:
 *                              type: string
 *                              example: 123456
 *
 *
 *      responses:
 *              '200':
 *                 description: tambah data sukses
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                accesToken:
 *                                   type: string
 *                                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5tYWUiOiJwYW5kdSIsImlhdCI6MTcxMDk2MDk0MCwiZXhwIjoxNzExMDQ3MzQwfQ.NinWPZMGPV5ofH5Rfkjik1m8xfK-5ji2fwcN5AvBKGE
 */
