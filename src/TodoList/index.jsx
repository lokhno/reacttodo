import React, { useContext, useState, useEffect } from "react";
import DBContext from "../context/db";
import {
    CheckBox,
    List,
    ListItem,
    Typography,
    ListItemGraphic,
    Spinner,
    ListItemText,
} from "mdc-react";
import TodoListItem from "../TodoListItem";
import './index.scss'
export default function TodoList({ match }) {
    const [todos, setTodos] = useState([]);

    const db = useContext(DBContext);
    const list = db.lists.find((list) => list.id === match.params.listId);
    useEffect(() => {
        db.get("todos")((collection) =>
            collection.where("listId", "==", match.params.listId)
        ).then(setTodos);
    }, [match.params.listId, db]);
    if (!list) {
        return <Spinner></Spinner>;
    }
    return (
        <div className="todo-list">
            <Typography className="todo-list__title" variant='headline4'>{list.title}</Typography>
            <List>
                {todos.map((todo) => {
                    return <TodoListItem className="todo-list__items" key={todo.id} todo={todo} />;
                    //return <div>{todo.title}</div>
                })}
            </List>
        </div>
    );
}
