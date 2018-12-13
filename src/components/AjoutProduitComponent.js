import React, {Component} from "react";

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
            <div className="form-group">
                <input type="submit" value="Ajouter Produit" className="btn btn-primary"/>
            </div>
        </form>
            </div>
    )
    }
}