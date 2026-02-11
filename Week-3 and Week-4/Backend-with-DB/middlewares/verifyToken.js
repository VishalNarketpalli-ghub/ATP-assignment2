import jwt from 'jsonwebtoken'

export function verifyUserToken(req, res, next) {
    // get token from req
    // we are using vookie-parser module to get the cookie
    // console.log(req.cookies)
    let signedToken = req.cookies.token;
    // console.log(signedToken)
    if (!signedToken) {
        return res.status(401).json({ message: "please login first " })
    }

    // verify token(decode)
    let decodedToken = jwt.verify(signedToken, 'abcdef')
    // console.log(decodedToken)
    next()
}