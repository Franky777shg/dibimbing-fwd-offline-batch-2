const { CustomResponse } = require('../utils/customResponse')

const setCookie = (req, res, next) => {
    try {
        res.cookie('session', req.body, {
            httpOnly: true,
            signed: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 1000
        })
        res.status(200).json(new CustomResponse("Set cookie success", req.body))
    } catch (err) {
        next(err)
    }
}

const getCookie = (req, res, next) => {
    try {
        const cookie = req.signedCookies.session
        res.status(200).json(new CustomResponse("Get cooki success", cookie))
    } catch (err) {
        next(err)
    }
}

module.exports = {
    setCookie,
    getCookie
}