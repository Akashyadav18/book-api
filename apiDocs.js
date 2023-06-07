
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get All Books
 *     description: Use this endpoint to Get all the books
 *     tags:
 *       - CRUD
 *     responses:
 *       200:
 *         description: ok
 *       404:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a Book
 *     tags:
 *       - CRUD
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID to Get book 
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: ok
 *       404:
 *         description: Book Not Found
 */

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a Book information
 *     tags:
 *       - CRUD
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID to Get book 
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               img:
 *                 type: string
 *               summery:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book Updated
 *       404:
 *         description: Book Not Found
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Update a Book information
 *     tags:
 *       - CRUD
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               img:
 *                 type: string
 *               summery:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book Updated
 *       404:
 *         description: Book Not Found
 */

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a Book
 *     tags:
 *       - CRUD
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the book to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted
 *       404:
 *         description: Book Not Found
 */

