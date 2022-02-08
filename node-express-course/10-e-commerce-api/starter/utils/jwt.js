const jwt = require('jsonwebtoken')

// Issue JWT
const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
    return token;
}

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);


module.exports = {
    createJWT,
    isTokenValid
}

// const tokenUser = {name:user.name, userId:user._id, role:user.role}
// const token = jwt.sign(tokenUser, 'jwtSecret', { expiresIn: '1d' });