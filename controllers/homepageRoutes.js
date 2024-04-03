const express = require('express');
const router = express.Router();

// Get method
router.get('/', (req, res) => {
    res.render('addJoke')
}
)
// Session Data
router.get('/sessiondata', (req, res) => {
	res.json(req.session);
});

module.exports = router;
