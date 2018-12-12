import React, { Component } from 'react';

export default class EditComponent extends Component {
    produit = {
        nom : "",
        descriptif : ""
    };

    state = [];
    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Ajouter nouveau produit</h3>
                <form>
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