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
 * /wisata/add:
 *  post:
 *      tags:
 *          - wisata
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan wisata
 *      description: api untuk menambah daftar wisata
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           nama:
 *                              type: string
 *                              example: kawah sikidang
 *                           tentang:
 *                              type: string
 *                              example: kawah sikidang adalah
 *                           tiket:
 *                              type: integer
 *                              example: 5000
 *                           alamat:
 *                              type: string
 *                              example: kejajar, wonosobo
 *                           link:
 *                              type: string
 *                              example: https://gmaps.com/kawahsikidang
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
 * /wisata/update/{id}:
 *  put:
 *      tags:
 *          - wisata
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan wisata
 *      description: api untuk menambah daftar wisata
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
 *                              example: kawah sikidang
 *                           tentang:
 *                              type: string
 *                              example: kawah sikidang adalah
 *                           tiket:
 *                              type: integer
 *                              example: 5000
 *                           alamat:
 *                              type: string
 *                              example: kejajar, wonosobo
 *                           link:
 *                              type: string
 *                              example: https://gmaps.com/kawahsikidang
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
 * /wisata/delete/{id}:
 *  delete:
 *      tags:
 *          - wisata
 *      security:
 *           - bearerAuth: []
 *      summary: menambahkan wisata
 *      description: api untuk menambah daftar wisata
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
 * /wisata/list?id=1:
 *  get:
 *    tags:
 *      - wisata
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
 * /wisata/list:
 *  get:
 *    tags:
 *      - wisata
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
