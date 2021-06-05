import { Switch, Route } from 'react-router-dom';
import { AddMenuPage, MenuPage, EditMenuPage } from '../pages';






const AppRoutes = () => {


    return(

        <Switch>
            <Route exact path="/"  component={MenuPage}/>
            <Route exact path="/add"  component={AddMenuPage}/>
            <Route exact path="/edit/:id"  component={EditMenuPage}/>
        </Switch>
    )
}

export default AppRoutes;