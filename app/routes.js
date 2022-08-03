const router = require('express').Router();

router.get('/health', (_req, res) => {
    res.status(202).json({ message: 'Success' });
  });

  module.exports = router;