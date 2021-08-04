import React from 'react';
import ReactDOM from 'react-dom';
import Contador from "./Contador";
import Mouse from "./Mouse";
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Contador} />
                    <Route path="/coords" component={Mouse} />
                </Switch>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

