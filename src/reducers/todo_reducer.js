import {
  LIST_TODO_PENDING,
  LIST_TODO_SUCCESS,
  LIST_TODO_ERROR,
  ADD_TODO,
  SELECT_TODO,
  EDIT_TODO,
  DELETE_TODO 
} from "../actions/todo_action";

const initialState = {
  pending: false,
  error: null,
  selected: null,
  data: null
};

export function listTodo(state = initialState, action) { 
  switch (action.type) {
    case LIST_TODO_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LIST_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case LIST_TODO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case ADD_TODO:
      return {
        ...state,
        pending: false,
        data: [...state.data, { ...action.data, id: action.data.createdAt }],
      };
    case SELECT_TODO:
      let result;
      if (state.data) {
        result = state.data.find(({ id }) => id === action.data);
      } 
      return {
        ...state,
        selected: result

      };
    case EDIT_TODO:
      let editIndex = state.data.findIndex(({ id }) => id === action.data.id);
      if (editIndex !== -1) {
        state.data[editIndex] = action.data;
      }
      return {
        ...state,
      };
    case DELETE_TODO:
      let deteleIndex = state.data.findIndex(({ id }) => id === action.data);
      if (deteleIndex !== -1) {
        state.data.splice(deteleIndex, 1);
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
 