import { combineReducers } from "redux";


import { reducer as formReducer } from "redux-form";
import { listTodo, } from './todo_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  listTodo, 
});

export default rootReducer;
