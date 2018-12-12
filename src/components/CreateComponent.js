import React, { Component } from 'react';

export default class CreateComponent extends Component {
    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Ajouter nouvelle chirurgie</h3>
                <form>
                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Descriptif</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Ajouter Chirurgie" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}