import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ChirugiesComponent from './components/ChirurgiesComponent';
import HormonesComponent from './components/HormonesComponent';
import IndexComponent from './components/IndexComponent';
import AdminComponent from "./components/AdminComponent";
import BDDComponent from "./components/BDDComponent";
import RessourcesComponent from "./components/RessourcesComponent";
import DebugComponent from "./components/DebugComponent";
import LogComponent from "./components/LogComponent";

import NavBarComponent from "./components/NavBarComponent";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSyringe, faTablets, faAllergies, faCheckCircle, faTimesCircle, faExclamationCircle, faDollarSign, faSquare, faTimes, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faSyringe, faTablets, faAllergies, faCheckCircle, faTimesCircle, faExclamationCircle, faDollarSign, faSquare, faTimes, faEdit, faTrash);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e0e0e0',
        },
        secondary: {
            main: '#f06292',
        },
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            login: "",
            pass: "",
            hideBox: true
        };

        this.showBox = this.showBox.bind(this);
        this.connect = this.connect.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
    }

    showBox() {
        this.setState({hideBox: !this.state.hideBox});
    }
    onChangeLogin(e) {
        this.setState({login: e.target.value});
    }
    onChangePass(e) {
        this.setState({pass: e.target.value});
    }
    connect(e) {
        e.preventDefault();

        const data = {
            login : this.state.login,
            pass : this.state.pass
        }
    }

    render() {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <NavBarComponent style={{height:'10vh'}}/>
                    <Container maxWidth={"xl"} style={{marginTop:92, height:'90vh'}}>
                        <Switch>
                            <Route path='/chirurgies' component={ChirugiesComponent} />
                            <Route path='/hormones' component={HormonesComponent} />
                            <Route path='/admin' component={AdminComponent} />
                            <Route path='/bdd' component={BDDComponent} />
                            <Route path='/ressource' component={RessourcesComponent} />
                            <Route path='/index' component={IndexComponent} />
	                        <Route path='/debug' component={DebugComponent} />
                            <Route path='/log' component={LogComponent} />
                        </Switch>
                    </Container>
                </ThemeProvider>
            </Router>
        );
    }
}

export default App;