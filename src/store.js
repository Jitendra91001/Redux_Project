import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./redux/actions/reducer";

const store=createStore(rootReducer)

export {store}