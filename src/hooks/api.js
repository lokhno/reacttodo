// import { useState, useEffect, useMemo } from "react";
// import * as api from "../api";

// export default function useApi() {


//     function getLists() {
//         return api.getLists().then(setLists);
//     }

//     function getListTodos(listId) {
//         return api.getListTodos(listId).then(setTodos);
//     }

//     function getTodos() {
//         return api.getTodos().then(setTodos);
//     }

//     function createTodo(data) {
//         return api.createTodo(data).then(
//             setTodos((todo) => {
//                 setTodos([...todos, todo]);
//             })
//         );
//     }

//     function updateTodo(todoId, data) {
//         return api.updateTodo(todoId, data).then((data) => {
//             setTodos([
//                 ...todos.map((t) => (t.id !== todoId ? { ...t, ...data } : t)),
//             ]);
//         });
//     }

//     function deleteTodo(todoId) {
//         return api
//             .deleteTodo(todoId)
//             .then((todoId) =>
//                 setTodos([...todos].filter((todo) => todo.id !== todoId))
//             );
//     }

//     const actions = useMemo(
//         () => ({
//             getListTodos,
//             getTodos,
//             getLists,
//             createTodo,
//             deleteTodo,
//             updateTodo,
//         }),
//         []
//     );

//     return {
//         data: {
//             lists,
//             todos,
//         },
//         actions,
//     };
// }
