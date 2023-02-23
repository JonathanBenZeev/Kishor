
import { orderService } from '../services/order.services.js';
import { store } from '../store/store.js'
import {
    SET_ORDERS,
    ADD_ORDER
} from './order.reducer'


export async function loadOrders() {
    try {
        const orders = await orderService.query()
        store.dispatch({
            type: SET_ORDERS,
            orders
        })

    } catch (err) {
        console.log('Cannot set orders', err);
        throw err
    }
}
export async function setOrders(orders) {
    try {
        const updatedOrders = await orderService.put(orders)
        store.dispatch({
            type: SET_ORDERS,
            updatedOrders
        })

    } catch (err) {
        console.log('Cannot set orders', err);
        throw err
    }
}
export async function addOrder(order) {
    try {
        const orderToAdd = await orderService.add(order)
        store.dispatch({
            type: ADD_ORDER,
            orderToAdd
        })

    } catch (err) {
        console.log('Cannot add order', err);
        throw err
    }
}
// export async function updateStay(stay, inventaiton) {
//     try {
//         const updatedStay = await orderReducer.save(stay, inventaiton)
//         store.dispatch({
//             type: UPDATE_ORDERS,
//             updatedStay
//         })

//     } catch (err) {
//         console.log('Cannot set stay', err);
//         throw err
//     }
// }