import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default class AjoutProduitComponent extends Component {

    render() {
        return (
            <div>
        <h3 style={{marginBottom: 15}}>Ajouter nouveau produit</h3>
        <form style={{marginLeft: 10}}>
            <div className="form-group">
                <label>Nom du Produit</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Descriptif</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="row">
            <div className="form-group col-sm-6">
                <Link to={'/edit'}>
                <input type="submit" value="Valider" className="btn btn-primary"/>
                </Link>
            </div>
            <div className="form-group col-sm-6">
                <Link to={'/edit'}>
                    <input type="submit" value="Annuler" className="btn btn-primary"/>
                </Link>
            </div>
            </div>
        </form>
            </div>

    )
    }
}