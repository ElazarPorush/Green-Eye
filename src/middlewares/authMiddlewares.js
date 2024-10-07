const jwt = require("jsonwebtoken")

const onlyCommanders = async (req, res, next) => {
    try {
        const token = req.cookies.token 
        const userDate = await jwt.verify(token, process.env.TOKEN)
        if (userDate.role !== "commander")
            res.status(403).json.send("jkfdfghdg")
        req.user = userDate
        next()
     } catch (err) {
         console.log(err);
         res.status(401).json(err)
     }
}

const onlySoldiersAndCommanders = async (req, res, next) => {
    try {
       const token = req.cookies.token 
       const userDate = await jwt.verify(token, process.env.TOKEN)
       req.user = userDate
       next()
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

module.exports = {
    onlyCommanders,
    onlySoldiersAndCommanders
}