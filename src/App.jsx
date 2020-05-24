import React, { useReducer, useContext, useEffect, useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import AppDrawer from "./AppDrawer";
import AppContent from "./AppContent";
import TodoList from "./pages/TodoList";
import { reducer, initialState, actions } from "./store";
import LoginPage from "./pages/Login";
import DataContext from "./context/data";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    useEffect(() => {
        actions.setAuth(dispatch);
        actions.getLists(dispatch);
    }, []);

    if(!state.user) {
        return <LoginPage />
    } 


    return (
        <DataContext.Provider value={contextValue}>
            <Route exact path="/login">
              
            </Route>
            <div className="app">
                <AppDrawer lists={state.lists} />

                <AppContent>
                    <Switch>
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/" component={TodoList} />
                        <Route path="/:listId" component={TodoList} />
                    </Switch>
                </AppContent>
            </div>
        </DataContext.Provider>
    );
}

export default App;
