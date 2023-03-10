export const utilService = {
    makeId,
    saveToStorage,
    loadFromStorage,
    cutName,
    statusValidiation
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


