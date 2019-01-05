import React from "react";

{this.state.produits.map((prod , key) =>
	<li key={prod.nom} className="list-group-item">
		<div className="row">
			<h5 className="col-sm-3" style={{fontWeight:"bold", margin:0}}>{prod.nom.charAt(0).toUpperCase() + prod.nom.slice(1)}</h5>
			<p className="col-sm-8" style={{margin:0}}>{prod.desc}</p>
			<span style={{color:"#888", paddingLeft:2, textAlign:"right"}} className="col-sm-1"><button onClick={() => this.handleshow(key)}>{'\u25bc'}</button></span>
		</div>
		<div hidden={prod.show} className="row" style={{marginTop:20, paddingTop:10, borderTopStyle:"solid", borderTopWidth:1, borderTopColor:"#D2D2D2"}}>
			<img alt="" src={prod.img} className="col-sm-3"/>
			<p className="col-sm-9" style={{margin:0}}>{prod.fullDesc}</p>
		</div>
	</li>
)}