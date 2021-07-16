import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from '../pages/Board';



const Routes = () => {
    
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Board />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;