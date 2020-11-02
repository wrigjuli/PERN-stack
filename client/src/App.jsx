import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import restaurantdetailPage from "./routes/restaurantdetailPage";

const App = () => {
    return <div>
        <Router>
            <Switch>    
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/restaurants/:id/update" component = {UpdatePage} />
                <Route exact path = "/restaurants/:id" component = {restaurantdetailPage} />


            </Switch>
        </Router>

    </div>
}

export default App;