import React, {Component} from "react";
import axios from 'axios';

export default class AjoutProduitComponent extends Component {

	DangerEnum = {
		Safe: 0,
		Douteux: 1,
		Dangereux: 2
	};
	VoieEnum = {
		Transdermique: 0,
		Orale: 1,
		IntraMusculaire: 2
	};



	// state = {
	// 	nom:"androcur",
	// 	desc: "Anti-androgene",
	// 	molecule : "acetate de cyproterone",
	// 	pactif : "cyproterone",
	// 	danger : "Dangeureux",
	// 	wiki : "https://fr.wikipedia.org/wiki/Cyprotérone",
	// 	vente : true,
	// 	france : true,
	// 	show: false,
	// 	img: "https://picsum.photos/200",
	// 	fullDesc:   "-Effets Attendus : \n\n" +
	// 				"-Effets Indesirables : \n\n" +
	// 				"-Risques : \n\n" +
	// 				"-Description : "
	// }
	constructor(props) {
		super(props);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDesc = this.onChangeDesc.bind(this);
		this.onChangeImg = this.onChangeImg.bind(this);
		this.onChangeMolecule = this.onChangeMolecule.bind(this);
		this.onChangePrincipe = this.onChangePrincipe.bind(this);
		this.onChangeVoie = this.onChangeVoie.bind(this);
		this.onChangeDangerosite = this.onChangeDangerosite.bind(this);
		this.onChangeVente = this.onChangeVente.bind(this);
		this.onChangeVenteFR = this.onChangeVenteFR.bind(this);
		this.onChangeWiki = this.onChangeWiki.bind(this);
		this.onChangeDescFull = this.onChangeDescFull.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: "",
			img: "",
			desc: "",
			molecule: "",
			principe: "",
			voie: "Transdermique",
			dangerosite: "Safe",
			vente: false,
			venteFR: false,
			wiki: "",
			descFull:`-Effets Attendus : 
-Effets Indesirables : 
-Risques : 
-Description : `
		}
	}

	onChangeName(e) {
		this.setState({name: e.target.value});
	}
	onChangeDesc(e) {
		this.setState({desc: e.target.value});
	}
	onChangeImg(e) {
		this.setState({img: e.target.value});
	}
	onChangeMolecule(e) {
		this.setState({molecule: e.target.value});
	}
	onChangePrincipe(e) {
		this.setState({principe: e.target.value});
	}
	onChangeVoie(e) {
		this.setState({voie: e.target.value});
	}
	onChangeDangerosite(e) {
		this.setState({dangerosite: e.target.value});
	}
	onChangeVente() {
		this.setState({vente: !this.state.vente});
	}
	onChangeVenteFR() {
		this.setState({venteFR: !this.state.venteFR});
	}
	onChangeWiki(e) {
		this.setState({wiki: e.target.value});
	}
	onChangeDescFull(e) {
		this.setState({descFull: e.target.value});
	}


	onSubmit(e) {
		e.preventDefault();
		const product = {
			name: this.state.name,
			desc: this.state.desc,
			img: this.state.img,
			molecule: this.state.molecule,
			principe: this.state.principe,
			voie: this.state.voie,
			dangerosite: this.state.dangerosite,
			vente: this.state.vente,
			venteFR: this.state.venteFR,
			wiki: this.state.wiki,
			descFull: this.state.descFull
		};
		axios.post('http://localhost:4200/product/add', product)
			.then(res => console.log(res.data));
		this.setState({
			name: "",
			img: "",
			desc: "",
			molecule: "",
			principe: "",
			// TODO basculer voie et dangerosite en int
			voie: "Trandermique",
			dangerosite: "Safe",
			vente: false,
			venteFR: false,
			wiki: "",
			descFull: `-Effets Attendus : 
-Effets Indesirables : 
-Risques : 
-Description : `
		})
	}
	// TODO Minimum fields requested

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Nom du Produit</label>
						<input type="text" onChange={this.onChangeName} value={this.state.name} className="form-control"/>
					</div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="text" onChange={this.onChangeImg} value={this.state.img} className="form-control"/>
                    </div>
					<div className="form-group">
						<label>Descriptif</label>
						<input type="text" onChange={this.onChangeDesc} value={this.state.desc} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Molécule</label>
						<input type="text" onChange={this.onChangeMolecule} value={this.state.molecule} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Principe actif</label>
						<input type="text" onChange={this.onChangePrincipe} value={this.state.principe} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Voie</label>
						<select onChange={this.onChangeVoie} value={this.state.voie}>
							<option>Transdermique</option>
							<option>Comprimés</option>
							<option>Injection</option>
						</select>
					</div>
					<div className="form-group">
						<label>Dangerosité</label>
						<select onChange={this.onChangeDangerosite} value={this.state.dangerosite}>
							<option>Safe</option>
							<option>Douteux</option>
							<option>Dangeureux</option>
						</select>
					</div>
					<div className="form-group checkbox">
						<label><input type="checkbox" onChange={this.onChangeVente} checked={this.state.vente}/>Disponible</label>
					</div>
					<div className="form-group checkbox">
						<label><input type="checkbox" onChange={this.onChangeVenteFR} checked={this.state.venteFR}/>En France</label>
					</div>
					<div className="form-group">
						<label>Wiki</label>
						<input type="text" onChange={this.onChangeWiki} value={this.state.wiki} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Descriptif Complet</label>
						<textarea rows="6" type="text" onChange={this.onChangeDescFull} value={this.state.descFull} className="form-control"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Upload" className="btn btn-primary"/>
					</div>
				</form>
			</div>
		)
	}
}