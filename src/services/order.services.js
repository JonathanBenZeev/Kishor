import { httpService } from "./http.service"


export const orderService = {
    query,
    add,
    put
}


async function query() {
    try {
        let orders = await httpService.get('order')
        return orders
    } catch (err) {
        console.log(err);
        throw err

    }
}
async function add(order) {
    try {
        let addedOrder = await httpService.post('order', order)
        return addedOrder
    } catch (err) {
        console.log(err);
        throw err

    }
}
async function put(orders) {
    try {
        return await httpService.put('order', orders)
    } catch (err) {
        console.log(err);
        throw err

    }
}