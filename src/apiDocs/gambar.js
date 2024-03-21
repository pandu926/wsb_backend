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
 * @swagger
 * /gambar/add:
 *  post:
 *    tags:
 *      - gambar
 *    security:
 *         - bearerAuth: []
 *    summary: Upload gambar
 *    description: Endpoint untuk mengupload gambar
 *    consumes:
 *      - multipart/form-data
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              id_wisata:
 *                type: string
 *                example: 2
 *              gambar1:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar pertama (max file size: 1MB)
 *              gambar2:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar kedua (max file size: 1MB)
 *              gambar3:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar ketiga (max file size: 1MB)
 *              gambar4:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar keempat (max file size: 1MB)
 *    responses:
 *      '200':
 *        description: Gambar berhasil diupload
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Gambar berhasil diupload
 *                urls:
 *                  type: array
 *                  items:
 *                    type: string
 *                    format: uri
 *                    example: http://localhost:3000/uploads/gambar1.jpg
 *                    description: URL dari gambar yang berhasil diupload
 *      '400':
 *        description: Gagal mengupload gambar
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example: Terjadi kesalahan saat mengupload gambar
 */

/**
 * @swagger
 * /gambar/update/{id}:
 *  put:
 *    tags:
 *      - gambar
 *    security:
 *         - bearerAuth: []
 *    summary: menambahkan kategori
 *    description: api untuk mengapus gambar
 *    parameters:
 *        - name : id
 *          in : path
 *          required : true
 *          schema :
 *            type : integer
 *    consumes:
 *      - multipart/form-data
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              id_wisata:
 *                type: string
 *                example: 2
 *              gambar1:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar pertama (max file size: 1MB)
 *              gambar2:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar kedua (max file size: 1MB)
 *              gambar3:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar ketiga (max file size: 1MB)
 *              gambar4:
 *                type: string
 *                format: binary
 *                description: |
 *                  Gambar keempat (max file size: 1MB)
 *    responses:
 *      '200':
 *        description: Gambar berhasil diupload
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Gambar berhasil diupload
 *                urls:
 *                  type: array
 *                  items:
 *                    type: string
 *                    format: uri
 *                    example: http://localhost:3000/uploads/gambar1.jpg
 *                    description: URL dari gambar yang berhasil diupload
 *      '400':
 *        description: Gagal mengupload gambar
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example: Terjadi kesalahan saat mengupload gambar
 */

/**
 *  @swagger
 * /gambar/delete/{id}:
 *  delete:
 *      tags:
 *          - gambar
 *      security:
 *           - bearerAuth: []
 *      summary: menghapus gambar
 *      description: api untuk mengapus gambar
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
 * /gambar/list?id=1:
 *  get:
 *    tags:
 *      - gambar
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
 * /gambar/list:
 *  get:
 *    tags:
 *      - gambar
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
