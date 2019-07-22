import React, {Component} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Grid,
    Box,
    Hidden
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class ProdTableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show:true,
        };

        this.delete = this.delete.bind(this);
        this.onShow = this.onShow.bind(this);
        this.voieIcon = this.voieIcon.bind(this);
        this.dangerIcon = this.dangerIcon.bind(this);
    }

    delete() {
        axios.get('http://localhost:4200/product/delete/' + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    onShow() {
        this.setState({show:!this.state.show});
    }
    markup() {
        // transforme \n en <br />
        let narray = this.props.obj.descFull.split("\n");
        console.log(narray);
        return(narray.map(
            (object, i) => {
                return <p key={i}>{object}<br /></p>;
            }));
    }

    voieIcon(e) {
        if (e === "Comprimés") {
            return("tablets");
        } else if (e === "Injection") {
            return("syringe");
        } else if (e === "Transdermique") {
            return("allergies");
        } else return;
    }

    dangerIcon(e) {
        if (e === "Safe") {
            return({
                icon:"check-circle",
                col:"#5D5"
            });
        } else if (e === "Douteux") {
            return({
                icon:"times-circle",
                col:"#EC5"
            });
        } else if (e === "Dangeureux") {
            return({
                icon:"exclamation-circle",
                col:"#D55"
            });
        } else return;
    }

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Grid container spacing={0}>
                        <Grid item xs={4} sm={4} md={3}><Typography>{this.props.obj.name}</Typography></Grid>
                        <Grid item xs={8} sm={8} md={6}><Typography>{this.props.obj.desc}</Typography></Grid>
                        <Hidden smDown><Grid item xs={0} sm={0} md={3}>
                            <FontAwesomeIcon hidden={!this.state.show} style={{minWidth:"40px", color:"#555", margin:"5px"}} icon={this.voieIcon(this.props.obj.voie)} size="2x" transform={"up-1"}/>
                            <FontAwesomeIcon hidden={!this.state.show} style={{minWidth:"40px", color:this.dangerIcon(this.props.obj.dangerosite).col,  margin:"5px"}} icon={this.dangerIcon(this.props.obj.dangerosite).icon} size="2x"/>
                            <Box component={"span"}>
                                <FontAwesomeIcon style={{color:"#85bb65"}} icon="dollar-sign" size="2x" transform={"up-3"}/>
                                {this.props.obj.vente === false && <FontAwesomeIcon style={{color:"#D55", opacity:"0.8"}} icon="times" size="2x" transform={"up-3"}/>}
                            </Box>
                            <Box component={"span"}>
                                <FontAwesomeIcon style={{color:"#55D"}} icon="square" size="2x" transform={"up-3"}/>
                                {this.props.obj.venteFR === false && <FontAwesomeIcon style={{color:"#D55", opacity:"0.8"}} icon="times" size="2x" transform={"up-3"}/>}
                            </Box>
                        </Grid></Hidden>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={0}>
                        <div className="col-sm-3" style={{padding:0, margin:0, borderRight:"1px solid #AAA"}}>
                            <img alt="" src={this.props.obj.img} style={{width:"100%"}}/>
                            <div style={{padding:"10px", fontFamily:"courier", fontWeight:"bold"}}>
                                {this.props.obj.molecule}<br />
                                {this.props.obj.principe}<br />
                                <FontAwesomeIcon style={{minWidth:"40px", color:"#555", margin:"5px"}} icon={this.voieIcon(this.props.obj.voie)} size="2x" transform={"up-1"}/>
                                <FontAwesomeIcon style={{minWidth:"40px", color:this.dangerIcon(this.props.obj.dangerosite).col,  margin:"5px"}} icon={this.dangerIcon(this.props.obj.dangerosite).icon} size="2x"/>
                                <span className="fa-layers fa-fw" style={{minWidth:"40px", margin:"5px"}} size="2x">
                                <FontAwesomeIcon style={{color:"#85bb65"}} icon="dollar-sign" size="2x" transform={"up-3"}/>
                                    {this.props.obj.vente === false && <FontAwesomeIcon style={{color:"#D55", opacity:"0.8"}} icon="times" size="2x" transform={"up-3"}/>}
                            </span>
                                <span className="fa-layers fa-fw" style={{minWidth:"40px", margin:"5px"}}>
                                <FontAwesomeIcon style={{color:"#55D"}} icon="square" size="2x" transform={"up-3"}/>
                                    {this.props.obj.venteFR === false && <FontAwesomeIcon style={{color:"#D55", opacity:"0.8"}} icon="times" size="2x" transform={"up-3"}/>}
                            </span>
                                <br/>
                                <a href={this.props.obj.wiki}><FontAwesomeIcon icon={['fab', 'wikipedia-w']}/></a>
                                <div className="btn-group" style={{float:"right"}}>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon="edit"/></button>
                                    <button onClick={this.delete} className="btn btn-danger"><FontAwesomeIcon icon="trash"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9" style={{padding:"15px"}}>
                            {this.markup()}
                        </div>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default ProdTableRow;