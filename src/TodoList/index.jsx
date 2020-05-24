import React from "react";

import { List, Typography } from "mdc-react";

import TodoListItem from "../TodoListItem";

import "./index.scss";

export default function TodoList({
    todos,
    list,
    onDelete,
    onUpdate,
    onSelect,
}) {
    return (
        <div className="todo-list">
            <Typography className="todo-list__title" variant="headline4">
                {list.title}
            </Typography>
            <List>
                {todos.map((todo) => {
                    return (
                        <TodoListItem
                            className="todo-list__items"
                            key={todo.id}
                            todo={todo}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            onSelect={onSelect}
                        />
                    );
                })}
            </List>
        </div>
    );
}
