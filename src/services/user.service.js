import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const USER_KEY = 'userDB'
_createUsers()
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
    return await storageService.get(USER_KEY, userId)
}

function remove(userId) {
    return storageService.remove(USER_KEY, userId)
}

async function signup(credentials) {

    const user = await storageService.post(USER_KEY, credentials)
    _saveLoggedinUser(user)
    return user
}

async function login(credentials) {
    const users = await storageService.query(USER_KEY)
    const user = users.find((u) => u.username === credentials.username)
    if (!user) return Promise.reject('Login failed')
    _saveLoggedinUser(user)
    return user
}

function getUsers() {
    return storageService.query(USER_KEY)
}

function updateUser(user) {
    return storageService.put(USER_KEY, user)
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
            },
            {
                _id: 'u102',
                fullname: 'David Krosney',
                username: 'David K',
                password: 'secret1',
            },
        ]

        utilService.saveToStorage(USER_KEY, JSON.parse(JSON.stringify(users)))
    }
}