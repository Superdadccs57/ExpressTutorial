const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user === 'thomas') {
        req.user = {name: 'thomas', id:3}
        next()
    }
    else {
        res.status(401).send('Unauthorized!')
    }
}

module.exports = authorize