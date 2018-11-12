import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import AdminComponent from "./components/AdminComponent";
import BDDComponent from "./components/BDDComponent";
import RessourcesComponent from "./components/RessourcesComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a href={'/'} className="navbar-brand">React Express App</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">News / Infos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Chirurgies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">Hormones</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/admin'} className="nav-link">Administratif</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/bdd'} className="nav-link">Base de Données</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/ressources'} className="nav-link">Ressources</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/create' component={CreateComponent} />
                        <Route path='/edit/:id' component={EditComponent} />
                        <Route path='/admin' component={AdminComponent} />
                        <Route path='/bdd' component={BDDComponent} />
                        <Route path='/ressources' component={RessourcesComponent} />
                        <Route path='/index' component={IndexComponent} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;