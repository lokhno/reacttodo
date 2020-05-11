import React from "react";

import { Checkbox, ListItem, ListItemGraphic, ListItemText } from "mdc-react";

export default function TodoListItem({
    todo,
    onStatusChange: onCompleteChenge,
}) {
    return (
        <ListItem>
            <ListItemGraphic>
                <Checkbox
                    checked={todo.completed}
                    onChange={onCompleteChenge}
                />
            </ListItemGraphic>
            <ListItemText>{todo.title}</ListItemText>
        </ListItem>
    );
}

