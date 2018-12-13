
import React, { Component } from 'react';
import AjoutProduitComponent from "./AjoutProduitComponent";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


export default class EditComponent extends Component {
    state = {
        produits : [
            {
                nom:"androcur",
                desc: "Anti-androgene",
                img: "https://picsum.photos/200",
                fullDesc: "Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone "
            },
            {
                nom:"progynon",
                desc: "Estradiol",
                img: "https://picsum.photos/200",
                fullDesc: "Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection "
            }
        ]
    };

    render() {
        return (
            <div>
            <div style={{marginTop: 50}}>
                <ul className="list-group">
                    {this.state.produits.map(prod =>
                        <li key={prod.nom} className="list-group-item">
                            <div className="row">
                                <h5 className="col-sm-3" style={{fontWeight:"bold", margin:0}}>{prod.nom.charAt(0).toUpperCase() + prod.nom.slice(1)}</h5>
                                <p className="col-sm-8" style={{margin:0}}>{prod.desc}</p>
                                <span style={{color:"#888", paddingLeft:2, textAlign:"right"}} className="col-sm-1">{'\u25bc'}</span>
                            </div>
                            <div hidden={true} className="row" style={{marginTop:20, paddingTop:10, borderTopStyle:"solid", borderTopWidth:1, borderTopColor:"#D2D2D2"}}>
                                <img src={prod.img} className="col-sm-3"/>
                                <p className="col-sm-9" style={{margin:0}}>{prod.fullDesc}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
                <Router>
                    <div>
                        <btn className="btn btn-lg btn-dark">
                            <Link to={'/addprod'} className="text-white-50">Ajouter</Link>
                        </btn>
                        <Switch>
                        <Route path='/addprod' component={AjoutProduitComponent} />
                        </Switch>
                    </div>
                </Router>
        </div>
        )
    }
}