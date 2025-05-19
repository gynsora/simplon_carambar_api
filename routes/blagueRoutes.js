const express = require('express');
const router = express.Router();
const Blague = require('../models/blague');

/**
 * @swagger
 * components:
 *   schemas:
 *     Blague:
 *       type: object
 *       required:
 *         - titre
 *         - contenu
 *       properties:
 *         id:
 *           type: integer
 *         question:
 *           type: string
 *         reponse:
 *           type: string
 *       example:
 *         question: Pourquoi les poules n'ont pas de dents ?
 *         reponse: Parce qu'elles mangent des graines.
 */

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blague'
 */
router.get('/blagues', async (req, res) => {
  const blagues = await Blague.findAll();
  res.json(blagues);
});



/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajoute une nouvelle blague
 */
router.post('/blagues', async (req, res) => {
  const { question, reponse } = req.body;
  const blague = await Blague.create({ question, reponse });
  res.status(201).json(blague);
});

module.exports = router;
