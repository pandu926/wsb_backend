/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      name: Authorization
 *      in: header
 */

/**
 *  @swagger
 * /tagpivot/add:
 *  post:
 *      tags:
 *          - tagpivot
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan tagpivot
 *      description: api untuk menambah relasi kategori dan wisata
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           id_wisata:
 *                              type: integer
 *                              example: 1
 *                           id_tag:
 *                              type: integer
 *                              example: 1
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
 *                                id_wisata:
 *                                   type: integer
 *                                   example: 1
 *              '400':
 *                 description: error
 *
 */

/**
 *  @swagger
 * /tagpivot/update/{id}:
 *  put:
 *      tags:
 *          - tagpivot
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan kategori
 *      description: api untuk update tagpivot
 *      parameters:
 *          - name : id
 *            in : path
 *            required : true
 *            schema :
 *              type : integer
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           id_wisata:
 *                              type: integer
 *                              example: 1
 *                           id_tag:
 *                              type: integer
 *                              example: 1
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
 *                                nama:
 *                                   type: string
 *                                   example: kawah sikidang

 *              '400':
 *                 description: register gagal email sudah terdaftar
 *
 */

/**
 *  @swagger
 * /tagpivot/delete/{id}:
 *  delete:
 *      tags:
 *          - tagpivot
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan kategori
 *      description: api untuk mengapus tagpivot
 *      parameters:
 *          - name : id
 *            in : path
 *            required : true
 *            schema :
 *              type : integer
 *
 *      responses:
 *              '200':
 *                 description: tambah data sukses
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                nama:
 *                                   type: string
 *                                   example: terhapus
 */

/**
 * @swagger
 * /tagpivot/list?id=1:
 *  get:
 *    tags:
 *      - tagpivot
 *    summary: mencari data single / satu
 *    parameters:
 *        - in : query
 *          name: id
 *          required: true
 *          schema:
 *              type: integer
 *
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   name:
 *                      type: string
 *                      example: ahmad pandu
 *                   email:
 *                      type: string
 *                      example: pandu@gmail.com
 *                   password:
 *                      type: string
 *                      example: Pandu@123
 *                   total_score:
 *                      type: integer
 *                      example: 10
 *                   bio:
 *                      type: string
 *                      example: Pandu@123
 *                   city:
 *                      type: string
 *                      example: Pandu@123
 *                   sosial_media_url:
 *                      type: string
 *                      example: Pandu@123
 *                   is_active:
 *                      type: string
 *                      example: active
 */

/**
 * @swagger
 * /tagpivot/list:
 *  get:
 *    tags:
 *      - tagpivot
 *    summary: mencari data semua
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   name:
 *                      type: string
 *                      example: ahmad pandu
 *                   email:
 *                      type: string
 *                      example: pandu@gmail.com
 *                   password:
 *                      type: string
 *                      example: Pandu@123
 *                   total_score:
 *                      type: integer
 *                      example: 10
 *                   bio:
 *                      type: string
 *                      example: Pandu@123
 *                   city:
 *                      type: string
 *                      example: Pandu@123
 *                   sosial_media_url:
 *                      type: string
 *                      example: Pandu@123
 *                   is_active:
 *                      type: string
 *                      example: active
 */
