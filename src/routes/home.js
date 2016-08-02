const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ boss: 123 });
});

module.exports = router;
