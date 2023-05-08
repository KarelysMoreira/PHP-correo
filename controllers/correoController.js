const { request, response } = require('express');
const nodeMailer = require('nodemailer');


const envioCorreo = (req = request, resp = response) => {
    let body = req.body;


    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        auth: {
            user: 'karelisjuletzymoreiraandrade@gmail.com',
            pass: 'vddv kksd oezz lhpm'
        }

    });

    const opciones = {
        from: 'Karelys',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje,
        file: body.archivo
    };
    attachments: [
        {
            filename: 'mailtrap.png',
            path: __dirname + '/mailtrap.png',
            cid: 'uniq-mailtrap.png'
        }
    ]
    config.sendMail(opciones, function (error, result) {
        if (error) return resp.json({ ok: false, msg: error });
        return resp.json({
            ok: true,
            msg: result
        })
    })
}
module.exports = {
    envioCorreo
}