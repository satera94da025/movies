import React from 'react';
import './App.css';
import {MoviesList} from "./MoviesList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MovieDetails from "./MovieDetails";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={'/movie/:id'}>
                        <MovieDetails/>
                    </Route>
                    <Route exact path={'/movies'}>
                        <MoviesList/>
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
