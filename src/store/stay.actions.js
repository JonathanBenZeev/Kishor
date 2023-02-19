import { stayService } from '../services/stay.service';
import { store } from '../store/store.js'
import {
    SET_HOME,
    UPDATE_STAY
} from './stay.reducer'


export async function setStay() {
    try {
        const stay = await stayService.getStay()
        store.dispatch({
            type: SET_HOME,
            stay
        })

    } catch (err) {
        console.log('Cannot set stay', err);
        throw err
    }
}
export async function updateStay(stay) {
    try {
        const updatedStay = await stayService.save(stay)
        store.dispatch({
            type: UPDATE_STAY,
            updatedStay
        })

    } catch (err) {
        console.log('Cannot set stay', err);
        throw err
    }
}