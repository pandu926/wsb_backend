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
 * /tag/add:
 *  post:
 *      tags:
 *          - kategori
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan tag
 *      description: api untuk menambah daftar kategori
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           nama:
 *                              type: string
 *                              example: kawah
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
 *                                tentang:
 *                                   type: string
 *                                   example: kawah sikidang adalah
 *                                tiket:
 *                                   type: integer
 *                                   example: 5000
 *                                alamat:
 *                                   type: string
 *                                   example: kejajar, wonosobo
 *                                link:
 *                                   type: string
 *                                   example: https://gmaps.com/kawahsikidang
 *              '400':
 *                 description: register gagal email sudah terdaftar
 *
 */

/**
 *  @swagger
 * /tag/update/{id}:
 *  put:
 *      tags:
 *          - kategori
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan kategori
 *      description: api untuk menambah daftar kategori
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
 *                           nama:
 *                              type: string
 *                              example: sawah
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
 *                                tentang:
 *                                   type: string
 *                                   example: kawah sikidang adalah
 *                                tiket:
 *                                   type: integer
 *                                   example: 5000
 *                                alamat:
 *                                   type: string
 *                                   example: kejajar, wonosobo
 *                                link:
 *                                   type: string
 *                                   example: https://gmaps.com/kawahsikidang
 *              '400':
 *                 description: register gagal email sudah terdaftar
 *
 */

/**
 *  @swagger
 * /tag/delete/{id}:
 *  delete:
 *      tags:
 *          - kategori
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan kategori
 *      description: api untuk menambah daftar kategori
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
 * /tag/list?id=1:
 *  get:
 *    tags:
 *      - kategori
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
 * /tag/list:
 *  get:
 *    tags:
 *      - kategori
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
