const { SuccessResponse } = require('../utils/customResponse')

const setCookie = (req, res) => {
    try {
        res.cookie('session', req.body, {
            httpOnly: true,
            signed: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 1000
        })
        res.status(200).json(new SuccessResponse("Set cookie success", req.body))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getCookie = (req, res) => {
    try {
        const cookie = req.signedCookies.session
        res.status(200).json(new SuccessResponse("Get cooki success", cookie))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    setCookie,
    getCookie
}