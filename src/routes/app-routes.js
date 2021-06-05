import { Switch, Route } from 'react-router-dom';
import { AddMenuPage, MenuPage } from '../pages';






const AppRoutes = () => {


    return(

        <Switch>
            <Route exact path="/"  component={MenuPage}/>
            <Route exact path="/add"  component={AddMenuPage}/>
        </Switch>
    )
}

export default AppRoutes;