const jwt = require('jsonwebtoken');
const secret = require('../config'); // Ensure this is the correct path to your config file

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;

    // Check if the Authorization header is missing
    if (!token) {
        return res.status(401).json({ msg: 'Authorization header missing' });
    }

    const words = token.split(' ');

    // Check if the token format is correct (e.g., "Bearer <token>")
    if (words.length !== 2) {
        return res.status(400).json({ msg: 'Invalid token format' });
    }

    const jwtToken = words[1];

    try {
        const decodedValue = jwt.verify(jwtToken, secret);

        if (decodedValue.username) {
            next(); // Token is valid, proceed to the next middleware or route
        } else {
            res.status(403).json({ msg: 'You are not authenticated' });
        }
    } catch (err) {
        res.status(403).json({ msg: 'Invalid or expired token', error: err.message });
    }
}

module.exports = adminMiddleware;
