import React from 'react';
import { Link } from 'react-router-dom';


import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSyringe, faTablets, faAllergies, faCheckCircle, faTimesCircle, faExclamationCircle, faDollarSign, faSquare, faTimes, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
library.add(fab, faSyringe, faTablets, faAllergies, faCheckCircle, faTimesCircle, faExclamationCircle, faDollarSign, faSquare, faTimes, faEdit, faTrash);

const useStyles = makeStyles({
    tabText: {
        '&:hover': {
            color:'inherit',
            textDecoration:'none',
            backgroundColor:'#ccc'
        }
    },
    home: {
        fontWeight: 'bold',
        color: '#f06292',
        '&:hover': {
            color:'#f06292',
            textDecoration:'none',
            backgroundColor: '#e0f0ff'
        }
    },
    centered: {
        flexGrow: 1
    }
});

export default function NavBarComponent() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <AppBar position="fixed">
            <Tabs centered variant="scrollable" value={value} onChange={handleChange}>
                <Tab className={classes.home} component={Link} to={'/index'} label="MtWeb" textColor={"primary"} fullWidth={false} icon={<HomeIcon/>}/>
                {/*<Tab className={classes.tabText} component={Link} to={'/index'} label="News / Infos"/>*/}
                <Tab className={classes.tabText} component={Link} to={'/chirurgies'} label="Chirurgies"/>
                <Tab className={classes.tabText} component={Link} to={'/hormones'} label="Hormones"/>
                <Tab className={classes.tabText} component={Link} to={'/admin'} label="Administratif"/>
                <Tab className={classes.tabText} component={Link} to={'/bdd'} label="Practitiens"/>
                <Tab className={classes.tabText} component={Link} to={'/ressources'} label="Ressources"/>
                {/* <Tab component={Link} to={'/debug'} label="Debug"/> */}
            </Tabs>
        </AppBar>
    );
}

//<div style={{position:"absolute", right:0, inLine:"block"}} className="nav-item">
//                                    <div onClick={this.showBox}>Connect</div>
//                                    <form hidden={this.state.hideBox} onSubmit={this.connect}>
//                                        <div className="form-group">
//                                            <label>Login</label>
//                                            <input type="text" onChange={this.onChangeLogin} value={this.state.login} className="form-control"/>
//                                        </div>
//                                        <div className="form-group">
//                                            <label>Password</label>
//                                            <input type="password" onChange={this.onChangePass} value={this.state.pass} className="form-control"/>
//                                        </div>
//                                        <div className="form-group">
//                                            <input type="submit" value="Connect" className="btn btn-primary"/>
//                                        </div>
//                                    </form>
//		                            <Link to={'/register'} className="nav-link">Register</Link>
//	                            </div>