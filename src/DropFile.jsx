{/*<div>*/
}
{/*<form style={{marginLeft: 10}}>*/
}
{/*<div className="form-group">*/
}
{/*<label>Nom du Produit</label>*/
}
{/*<input type="text" value={this.state.nom} className="form-control"/>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<label>Descriptif</label>*/
}
{/*<input type="text" value={this.state.desc} className="form-control"/>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<label>Molécule</label>*/
}
{/*<input type="text" value={this.state.molecule} className="form-control"/>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<label>Principe actif</label>*/
}
{/*<input type="text" value={this.state.pactif} className="form-control"/>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<label>Dangerosité</label>*/
}
{/*<select value={this.state.danger}>*/
}
{/*<option>Safe</option>*/
}
{/*<option>Douteux</option>*/
}
{/*<option>Dangeureux</option>*/
}
{/*</select>*/
}
{/*</div>*/
}
{/*<div className="form-group checkbox">*/
}
{/*<label><input type="checkbox" checked={this.state.vente}/>Disponible</label>*/
}
{/*</div>*/
}
{/*<div className="form-group checkbox">*/
}
{/*<label><input type="checkbox" checked={this.state.france} />En France</label>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<label>Wiki</label>*/
}
{/*<input type="text" value={this.state.wiki} className="form-control"/>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<label>Descriptif Complet</label>*/
}
{/*<textarea type="text" value={this.state.fullDesc} className="form-control"/>*/
}
{/*</div>*/
}
{/*<div className="btn-group">*/
}
{/*<div className="form-group">*/
}
{/*<Link to={'/edit'}>*/
}
{/*<input type="submit" value="Valider" className="btn btn-success"/>*/
}
{/*</Link>*/
}
{/*</div>*/
}
{/*<div className="form-group">*/
}
{/*<Link to={'/edit'}>*/
}
{/*<input type="submit" value="Annuler" className="btn btn-danger"/>*/
}
{/*</Link>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</form>*/
}
{/*</div>*/
}


<div>
	<form style={{marginLeft: 10}}>
		<div className="form-group">
			<label>Nom du Produit</label>
			<input type="text" value={this.state.nom} className="form-control"/>
		</div>
		<div className="form-group">
			<label>Descriptif</label>
			<input type="text" value={this.state.desc} className="form-control"/>
		</div>
		<div className="form-group">
			<label>Molécule</label>
			<input type="text" value={this.state.molecule} className="form-control"/>
		</div>
		<div className="form-group">
			<label>Principe actif</label>
			<input type="text" value={this.state.pactif} className="form-control"/>
		</div>
		<div className="form-group">
			<label>Voie</label>
			<select value={this.state.voie}>
				<option>Transdermique</option>
				<option>Comprimés</option>
				<option>Injection</option>
			</select>
		</div>
		<div className="form-group">
			<label>Dangerosité</label>
			<select value={this.state.danger}>
				<option>Safe</option>
				<option>Douteux</option>
				<option>Dangeureux</option>
			</select>
		</div>
		<div className="form-group checkbox">
			<label><input type="checkbox" checked={this.state.vente}/>Disponible</label>
		</div>
		<div className="form-group checkbox">
			<label><input type="checkbox" checked={this.state.france}/>En France</label>
		</div>
		<div className="form-group">
			<label>Wiki</label>
			<input type="text" value={this.state.wiki} className="form-control"/>
		</div>
		<div className="form-group">
			<label>Descriptif Complet</label>
			<textarea type="text" value={this.state.fullDesc} className="form-control"/>
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