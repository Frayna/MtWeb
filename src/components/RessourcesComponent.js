import React, { Component } from 'react';
import axios from 'axios';
const config = require("../config.json");

export default class RessourcesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject : "",
            message : ""
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }


    onChangeSubject(e) {
        this.setState({subject: e.target.value});
    }

    onChangeMessage(e){
        this.setState({message: e.target.value});
    }

    onSubmit(){
        axios.post("https://" + config.server + ":4200/test/send", this.state)
            .then(res =>
                console.log(res.data)
            );
        this.setState({
            subject: "",
            message: ""
        })
    }
    render() {
        return(
            <div>
                <label>Sujet</label>
                <input type="text" onChange={this.onChangeSubject} value={this.state.subject} className="form-control"/>
                <label>Message</label>
                <input type="text" onChange={this.onChangeMessage} value={this.state.message} className="form-control"/>
                <input type="submit" value="Send Mail" onClick={this.onSubmit} className="btn btn-primary"/>
            </div>
        );
    }
}