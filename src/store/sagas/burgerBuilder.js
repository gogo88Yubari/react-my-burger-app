import axios from "../../axios-orders";
import * as actions from "../actions/index"

import { put } from "redux-saga/effects";

export function* initIngredientsSaga(action) {
    try {
        const response = yield axios.get("https://react-my-burger-79287-default-rtdb.firebaseio.com/ingredients.json");
        yield put(actions.setIngredients(response.data))
    } catch (error) {
        yield put(actions.fetchIngredientsFailed())
    }
}