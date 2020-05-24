import React from "react";

import {
    Checkbox,
    Layout,
    Typography,
    Icon,
    List,
    ListItem,
    ListItemText,
    TextField,
    IconButton,
} from "mdc-react";

import "./index.scss";

export default function TodoDetails({ todo, onClose }) {
    return (
        <aside className="todo-details">
            <Layout row justifyContent="between">
                <Typography>Детали задачи</Typography>
                <IconButton onClick={onClose}>
                    <Icon>close</Icon>
                </IconButton>
            </Layout>

            <Layout>
                <Layout row>
                    <Checkbox checked={todo.completed} onChange={() => {}} />
                    <TextField
                        value={todo.title}
                        onChange={() => {}}
                        fullWidth
                    />
                </Layout>
                {todo.steps && todo.steps.length > 0 && (
                    <List>
                        {todo.steps.map((step, index) => (
                            <ListItem>
                                <ListItemText key={index}>{step}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Layout>
        </aside>
    );
}
