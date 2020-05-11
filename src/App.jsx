import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { get } from "./api";

import "./App.scss";

import DBContext from "./context/db";

import AppDrawer from "./AppDrawer";
import AppContent from "./AppContent";
import TodoList from "./TodoList";

function App() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        get("lists")().then(setLists);
        //get("todos").then(setTodos);
    }, []);

    return (
        <DBContext.Provider value={{lists, get}}>
            <div className="app">
                <AppDrawer lists={lists} />

                <AppContent>
                    <Switch>
                        <Route path="/:listId" component={TodoList} />
                    </Switch>
                </AppContent>
            </div>
        </DBContext.Provider>
    );
}

export default App;
