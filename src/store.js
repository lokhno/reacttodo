import * as api from "./api";

export function reducer(state, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload.user,
            };
        case "LOGOUT_USER":
            return {
                ...state,
                user: null,
            };
        case "GET_LISTS":
            return {
                ...state,
                lists: action.payload.lists,
            };
        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload.todos,
            };
        case "CREATE_TODO":
            return {
                ...state,
                todos: state.todos.push(action.payload.todo),
            };
        case "GET_LIST_TODOS":
            return {
                ...state,
                todos: action.payload.todos,
            };
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.todo.id) {
                        return {
                            ...todo,
                            ...action.payload.todo,
                        };
                    }

                    return todo;
                }),
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload.todoId
                ),
            };
        default:
            return state;
    }
}

export const initialState = {
    user: null,
    lists: [],
    todos: [],
};

export function loginUser(login, password, dispatch) {
    return api.loginUser(login, password);
}

export function getLists(dispatch) {
    return api.getLists().then((lists) => {
        dispatch({
            type: "GET_LISTS",
            payload: { lists },
        });
    });
}

export function getTodos(dispatch) {
    return api.getTodos().then((todos) =>
        dispatch({
            type: "GET_TODOS",
            payload: { todos },
        })
    );
}

export function getListTodos(listId, dispatch) {
    return api.getListTodos(listId).then((todos) =>
        dispatch({
            type: "GET_LIST_TODOS",
            payload: { todos, listId },
        })
    );
}

export function createTodo(data, dispatch) {
    return api.createTodo(data).then((todo) =>
        dispatch({
            type: "CREATE_TODO",
            payload: { todo },
        })
    );
}

export function updateTodo(todoId, data, dispatch) {
    return api.updateTodo(todoId, data).then((todo) => {
        dispatch({
            type: "UPDATE_TODO",
            payload: { todo },
        });
    });
}

export function deleteTodo(todoId, dispatch) {
    return api.deleteTodo(todoId).then((todoId) => {
        dispatch({
            type: "DELETE_TODO",
            payload: { todoId },
        });
    });
}

export function setAuth(dispatch) {
    api.onAuth((user) => {
        if (user) {
            dispatch({
                type: "LOGIN_USER",
                payload: {
                    user,
                },
            });
        } else {
            dispatch({
                type: "LOGOUT_USER",
            });
        }
    });
}

export const actions = {
    getListTodos,
    getTodos,
    getLists,
    createTodo,
    deleteTodo,
    updateTodo,
    setAuth,
    loginUser,
};
