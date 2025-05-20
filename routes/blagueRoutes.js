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
 *         - question
 *         - reponse
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

// route pour ajouter une blague via postman
// pas de swagger.
router.post('/blagues', async (req, res) => {
  const { question, reponse } = req.body;
  const blague = await Blague.create({ question, reponse });
  res.status(201).json(blague);
});


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
 * /blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Aucune blague trouvée
 */
router.get('/blagues/random', async (req, res) => {
  const count = await Blague.count();
  if (count === 0) {
    return res.status(404).json({ message: 'Aucune blague trouvée' });
  }
  const randomIndex = Math.floor(Math.random() * count);
  const randomBlague = await Blague.findOne({ offset: randomIndex });
  res.json(randomBlague);
});

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupère une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: La blague demandée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Blague non trouvée
 */
router.get('/blagues/:id', async (req, res) => {
  const blague = await Blague.findByPk(req.params.id);
  if (!blague) return res.status(404).json({ message: 'Blague non trouvée' });
  res.json(blague);
});




module.exports = router;
