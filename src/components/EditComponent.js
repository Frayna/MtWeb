
import React, { Component } from 'react';
import AjoutProduitComponent from "./AjoutProduitComponent";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


export default class EditComponent extends Component {
    showAdd = false;

    // constructor()
    // {
    //     super();
    //     this.handleshow = this.handleshow().bind(this);
    // }

    state = {
        produits : [
            {
                nom:"androcur",
                desc: "Anti-androgene",
                show: false,
                img: "https://picsum.photos/200",
                fullDesc: "Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone Bloqueur de testosterone "
            },
            {
                nom:"progynon",
                desc: "Estradiol",
                show:true,
                img: "https://picsum.photos/200",
                fullDesc: "Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection Estradiol Valerate injection "
            }
        ],
        addShow : true
    };
handleshow = (id) =>{
    console.log(id);
    this.state.produits[id].show = !this.state.produits[id].show;
    this.setState({showProd : this.state.produits[id]})
//    prod = prod !== true;
//    prod = true ? false : true;
//     console.log(prod)
}
handleAdd = () =>{
    this.state.addShow = !this.state.addShow;
    this.setState({addShow : this.state.addShow})
}
    render() {
        return (
         <div>
            <div style={{marginTop: 50}}>
                <ul className="list-group">
                    {this.state.produits.map((prod , key) =>
                        <li key={prod.nom} className="list-group-item">
                            <div className="row">
                                <h5 className="col-sm-3" style={{fontWeight:"bold", margin:0}}>{prod.nom.charAt(0).toUpperCase() + prod.nom.slice(1)}</h5>
                                <p className="col-sm-8" style={{margin:0}}>{prod.desc}</p>
                                <span style={{color:"#888", paddingLeft:2, textAlign:"right"}} className="col-sm-1"><button onClick={() => this.handleshow(key)}>{'\u25bc'}</button></span>
                            </div>
                            <div hidden={prod.show} className="row" style={{marginTop:20, paddingTop:10, borderTopStyle:"solid", borderTopWidth:1, borderTopColor:"#D2D2D2"}}>
                                <img src={prod.img} className="col-sm-3"/>
                                <p className="col-sm-9" style={{margin:0}}>{prod.fullDesc}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
                <button onClick={this.handleAdd} className="btn btn-outline-primary" style={{float:"right"}}>+</button>
                <div hidden={this.state.addShow}>
                    <AjoutProduitComponent/>
                </div>
        </div>
        )
    }
}