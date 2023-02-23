export const utilService = {
    makeId,
    saveToStorage,
    loadFromStorage,
    cutName,
    statusValidiation,
    getOrderTemplate,
    getConfirmationTemplate

}

function makeId(length = 6) {
    var txt = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

function cutName(str) {
    return str.substring(0, 1).toUpperCase()
}

function statusValidiation(orders, inventaiton) {
    return orders.map((invent) => {
        if (inventaiton.status === 'aproved' && inventaiton._id !== invent._id &&
            (invent.startDate === inventaiton.startDate || invent.endDate === inventaiton.endDate)
        ) {
            invent.status = 'rejected'
        }
        return invent
    })
}


function getOrderTemplate() {
    return {
        username: 'Ellen Krosney',
        home: 'Kishor',
        msg: 'You have received a new order, please enter the application to confirm!',
        email: 'yonatanbz6@gmail.com'
    }
}


function getConfirmationTemplate({ byUser, startDate, endDate }) {
    return {
        username: byUser.fullname,
        email: byUser.email,
        home: 'Kishor',
        message: `We are very happy to confirm your order between ${startDate} to ${endDate}.
                 please take care of our beautiful home! 
        `
    }
}