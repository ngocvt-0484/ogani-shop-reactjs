import { fork } from "redux-saga/effects";
import categorySaga from "./category.saga";
import productSaga from "./product.saga";

export default function* mySaga() {
  yield fork(categorySaga);
  yield fork(productSaga);
}
