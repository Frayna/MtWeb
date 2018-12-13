import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default class AjoutProduitComponent extends Component {

    render() {
        return (
            <div>
                <form style={{marginLeft: 10}}>
                    <div className="form-group">
                        <label>Nom du Produit</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Descriptif</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="btn-group">
                        <div className="form-group">
                            <Link to={'/edit'}>
                                <input type="submit" value="Valider" className="btn btn-success"/>
                            </Link>
                        </div>
                        <div className="form-group">
                            <Link to={'/edit'}>
                                <input type="submit" value="Annuler" className="btn btn-danger"/>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}