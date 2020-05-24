import React, { useContext, useState, useEffect } from "react";

import {
    CheckBox,
    List,
    ListItem,
    Layout,
    Typography,
    ListItemGraphic,
    Spinner,
    ListItemText,
} from "mdc-react";
import { actions } from "../store";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import TodoDetails from "../components/TodoDetails";
import "./index.scss";

import DataContext from "../context/data";

export default function TodoListPage({ match }) {
    const { state, dispatch } = useContext(DataContext);
    const [selectedTodo, setSelectedTodo] = useState(null);

    console.log(state);
    useEffect(() => {
        if (match.params.listId) {
            actions.getListTodos(match.params.listId, dispatch);
        } else {
            actions.getTodos(dispatch);
        }
    }, [match.params.listId, dispatch]);

    function handleSubmit(title) {
        actions.createTodo({
            title,
            listId: list.id,
        });
    }

    function handleDelete(todoId) {
        actions.deleteTodo(todoId, dispatch);
    }

    function handleUpdate(todoId, data) {
        actions.updateTodo(todoId, data, dispatch);
    }

    function handleSelect(todo) {
        setSelectedTodo(todo, dispatch);
    }

    const list = state.lists.find((list) => list.id === match.params.listId);

    if (!list || !state.todos) {
        return <Spinner></Spinner>;
    }
    return (
        <Layout id="todo-list-page" className="page" row>
            <Layout>
                <TodoList
                    list={list}
                    todos={state.todos}
                    onSelect={handleSelect}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />

                <TodoForm onSubmit={handleSubmit} />
            </Layout>
            {selectedTodo && (
                <TodoDetails
                    onClose={() => setSelectedTodo(null)}
                    todo={selectedTodo}
                />
            )}
        </Layout>
    );
}
