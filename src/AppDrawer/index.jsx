import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    Drawer,
    DrawerHeader,
    DrawerContent,
    List,
    ListItem,
    ListItemGraphic,
    ListItemText,
    Icon,
    ListGroup,
    ListDivider,
} from "mdc-react";
import DataContext from "../context/data";


export default function AppDrawer({ lists }) {
    const {state} = useContext(DataContext)
    return (
        <Drawer id="app-drawer">
            <DrawerHeader title="React todo" subtitle={state.user ? state.user.email : 'kek'} />
            <DrawerContent>
                <ListGroup>
                    <List>
                        {[
                            { title: "Задачи", icon: "home", to: "/" },
                            { title: "Важно", icon: "star", to: "/important" },
                            {
                                title: "Запланированные",
                                icon: "event",
                                to: "/planned",
                            },
                        ].map((item) => {
                            return (
                                <ListItem
                                    key={item.icon}
                                    component={NavLink}
                                    to={item.to}
                                >
                                    <ListItemGraphic>
                                        <Icon>{item.icon}</Icon>
                                    </ListItemGraphic>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                    <ListDivider element="hr" />
                    <List>
                        {lists.map((item) => {
                            return (
                                <ListItem
                                    key={item.id}
                                    component={NavLink}
                                    to={item.id}
                                >
                                    <ListItemGraphic>
                                        <Icon>list</Icon>
                                    </ListItemGraphic>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </ListGroup>
            </DrawerContent>
        </Drawer>
    );
}
