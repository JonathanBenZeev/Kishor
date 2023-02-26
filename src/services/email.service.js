import emailjs from '@emailjs/browser'

export const emailService = {
    newOrderMail,
    confirmEmail
}


async function newOrderMail(startDate, endDate, byUser) {
    try {
        await emailjs.send(
            'service_fhsoi34',
            'template_o20ywjc',
            _getOrderTemplate(startDate, endDate, byUser),
            '2Ho_NuLz-ByuFz7Jw'
        )

    } catch (e) {
        console.log(e);
        throw new Error('sending email failed')
    }
}

async function confirmEmail(inventaiton){
    try{ await emailjs.send(
        'service_fhsoi34',
        'template_z5xanmq',
       _getConfirmationTemplate(inventaiton),
        '2Ho_NuLz-ByuFz7Jw'
      )
    }catch (e){
        console.log(e);
        throw new Error('sending email failed')
    }
}  


function _getOrderTemplate(startDate, endDate, byUser) {
    return {
        username: 'Ellen Krosney',
        home: 'Kishor',
        msg: `You have received a new order by ${byUser.fullname} frome ${startDate} to ${endDate} , 
        please enter the application to confirm!`,
        email: 'ellen.krosney@gmail.com'
    }
}



function _getConfirmationTemplate({ byUser, startDate, endDate }) {
    return {
        username: byUser.fullname,
        email: byUser.email,
        home: 'Kishor',
        message: `We are very happy to confirm your order between ${startDate} to ${endDate}.
                 please take care of our beautiful home! 
        `
    }
}