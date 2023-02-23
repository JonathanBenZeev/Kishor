import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service'


const USER_KEY = 'userDB'
// _createUsers()
export const userService = {
    get,
    remove,
    signup,
    login,
    logout,
    updateUser,
    getUsers,
    getEmptyCredentials,
    getLoggedinUser,
}

async function get(userId) {
    // return await storageService.get(USER_KEY, userId)
    if (!userId) return null
    return await httpService.get(`user/${userId}`)

}

function remove(userId) {
    // return storageService.remove(USER_KEY, userId)
    return httpService.delete(`user/${userId}`)

}

async function signup(credentials) {

    // credentials.inventaions = []
    // const user = await storageService.post(USER_KEY, credentials)
    const user = await httpService.post('auth/signup', credentials)
    _saveLoggedinUser(user)
    return user
}

async function login(credentials) {
    // const users = await storageService.query(USER_KEY)
    // const user = users.find((u) => u.username === credentials.username)
    const user = await httpService.post('auth/login', credentials)
    if (!user) return Promise.reject('Login failed')
    _saveLoggedinUser(user)
    return user
}

function getUsers() {
    // return storageService.query(USER_KEY)
    return httpService.get(`user`)

}

async function updateUser(user) {

    // if (inventaiton) {
    //     const updatedOrders = utilService.statusValidiation(user.inventaions, inventaiton)
    //     console.log(updatedOrders);
    //     user.inventaions = updatedOrders
    // }
    // console.log(user);
    // return storageService.put(USER_KEY, user)
    return await httpService.put(`user/${user._id}`, user)

}

function getEmptyCredentials(
    fullname = '',
    username = '',
    password = ''
) {
    return { fullname, username, password }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || null)
}

function logout() {
    sessionStorage.removeItem('loggedinUser')
    return Promise.resolve()
}

function _saveLoggedinUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
}








function _createUsers() {
    let users = utilService.loadFromStorage(USER_KEY)
    if (!users || !users.length) {
        const users = [
            {
                _id: 'u101',
                fullname: 'Ellen Krosney',
                username: 'Ellen K',
                password: 'secret',
                isAdmin: true,
                inventaions: []
            },
            {
                _id: 'u102',
                fullname: 'David Krosney',
                username: 'David K',
                password: 'secret1',
                inventaions: []
            },
        ]

        utilService.saveToStorage(USER_KEY, JSON.parse(JSON.stringify(users)))
    }
}