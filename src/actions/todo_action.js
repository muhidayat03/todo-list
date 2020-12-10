import API from "./API";
import { actionPending, actionSuccess, actionError } from "./index";

export const LIST_TODO_PENDING = "LIST_TODO_PENDING";
export const LIST_TODO_SUCCESS = "LIST_TODO_SUCCESS";
export const LIST_TODO_ERROR = "LIST_TODO_ERROR";
export const ADD_TODO = "ADD_TODO";
export const SELECT_TODO = "SELECT_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

const LIST_TODO_URL = "to-do-list";

export function listTodo() {
  return async (dispatch) => {
    dispatch(actionPending(LIST_TODO_PENDING));
    try {
      const response = await API.get(
        LIST_TODO_URL,
      );
      if (response) {

        let result = response.data.map(item => {
          const date = item.createdAt.split(' ').join('T');
          return {
            ...item,
            createdAt: new Date(date)
          }
        })
        dispatch(actionSuccess(LIST_TODO_SUCCESS, result));
      }
      return response;
    } catch (error) {
      dispatch(actionError(LIST_TODO_ERROR, error)); 
    }
  };
}

export function addTodo(data = {}) {
  return {
    type: ADD_TODO,
    data: data
  }
}
export function setSelected(id = null) {
  return {
    type: SELECT_TODO,
    data: id
  }
}

export function editTodo(data = null) { 
  console.log(data)
  return {
    type: EDIT_TODO,
    data: data
  }
}
export function deleteTodo(id = null) {
  return {
    type: DELETE_TODO,
    data: id
  }
}

// export function detailTodo(id = null) {
//   return async (dispatch) => {
//     dispatch(actionPending(DETAIL_TODO_PENDING));
//     try {
//       const response = await API.get(`${LIST_TODO_URL}/${id}`, authHeader());
//       dispatch(actionSuccess(DETAIL_TODO_SUCCESS, response.data));
//       return response;
//     } catch (error) {
//       dispatch(actionError(DETAIL_TODO_ERROR, error));
//       toastError(error);
//     }
//   };
// }

// export function editTodo(id, param = {}) {
//   param = {
//     ...param,
//   };

//   return async (dispatch) => {
//     dispatch(actionPending(EDIT_TODO_PENDING));
//     try {
//       const response = await API.put(
//         `${LIST_TODO_URL}/${id}`,
//         param,
//         authHeader()
//       );
//       dispatch(actionSuccess(EDIT_TODO_SUCCESS, response.data));
//       return response;
//     } catch (error) {
//       dispatch(actionError(EDIT_TODO_ERROR, error));
//       toastError(error);
//     }
//   };
// }
// export function deleteTodo(id) {
//   return async (dispatch) => {
//     dispatch(actionPending(DELETE_TODO_PENDING));
//     try {
//       const response = await API.delete(
//         `${LIST_TODO_URL}/${id}`,
//         authHeader()
//       );
//       dispatch(actionSuccess(DELETE_TODO_SUCCESS, response.data));
//       return response;
//     } catch (error) {
//       dispatch(actionError(DELETE_TODO_ERROR, error));
//       toastError(error);
//     }
//   };
// }
