import React, { Component } from 'react';

class Screen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            nom : props.nom,
            descriptif : props.descriptif
        }
    }

    render () {
        return(<h1>pouet</h1>)
        // …
    }
}