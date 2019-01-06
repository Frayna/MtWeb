import React, { Component } from 'react';

export default class IndexComponent extends Component {
    constructor (props){
        super(props);

        this.state = {
            open:false,
            id:-1,

            content: [
                {
                    id:1,
                    img: "https://picsum.photos/600",
                    title: "Insolite: Test !",
                    desc: "Liste d'absences de contenu, le 12 eme ne va pas vous etonner! Cliques pour avoir un gros dicklit!",
                }, {
                    id:2,
                    img: "https://picsum.photos/700",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:3,
                    img: "https://picsum.photos/800",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:4,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:5,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:6,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:7,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:8,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:9,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:10,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:11,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:12,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:13,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:14,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:15,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:16,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:17,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }, {
                    id:18,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                }
            ]
        };

        this.style = {
            buttonParam:{
                className:"btn btn-outline-primary btn-sm",
                text:"More..."
            },
            global:{
                margin:"1.6%",
                width:"30%",
                height:"400px",
                display:"inline-block",
                verticalAlign:"top",
                border:"1px solid #AAA",
                borderRadius:"20px"
            },
            img:{
                margin:0,
                width:"100%",
                height:"50%",
                objectFit: "cover",
                overflow: "hidden",
                borderTopLeftRadius:"20px",
                borderTopRightRadius:"20px",
            },
            div:{
                height:"50%",
                padding:"15px",
                paddingTop:"25px",
            },
            h5:{
                height:"20%",
                margin:0
            },
            p:{
                height:"60%",
                overflow: "hidden",
                margin:0
            },
            buttonDiv:{
                height:"20%",
                width:"100%",
                padding:"5px"
            },
            button:{
                float:"right",
                marginRight:"-10px"
            }
        };

        this.styleOpen = {
            buttonParam:{
                className:"btn btn-outline-danger btn-sm",
                text:"Close"
            },
            global:{
                backgroundColor:"#FFF",
                margin:"auto",
                display:"block",
                position:"fixed",
                top:56,
                left:0,
                paddingLeft:"22%",
                paddingRight:"22%",
                width:"80%",
                height:"90%",
                overflow:"auto",
                verticalAlign:"center",
            },
            img:{
                margin:0,
                width:"50%",
                borderTopLeftRadius:"20px",
                borderTopRightRadius:"20px",
            },
            div:{
                height:"50%",
                padding:"15px",
                paddingTop:"25px",
            },
            h5:{
                height:"20%",
                margin:0
            },
            p:{
                height:"60%",
                margin:0
            },
            buttonDiv:{
                position:"fixed",
                top:"50px",
                right:"50px",
            },
            button:{
                float:"right",
                marginRight:"-10px"
            }
        };

        this.showArticle = this.showArticle.bind(this);
        this.onClickMore = this.onClickMore.bind(this);
        this.isOpen = this.isOpen.bind(this);
    };

    onClickMore(e, i) {
        let newArray = [];

        if (this.state.open === false && this.state.id === -1) {
            if (i !== 0) {
                newArray.push(this.state.content[i]);
                newArray.push(...this.state.content.slice(0, i));
                newArray.push(...this.state.content.slice(i+1));
                console.table(newArray);
                this.setState({content:[...newArray]});
            }
            this.setState({open: true, id: i});
            return; // if no article is open, move i to first array position and open i
        }
        if (this.state.open === true && i === 0) {
            if (this.state.id !== 0) {
                newArray = this.state.content.sort((a, b) => a.id - b.id);
                console.table(newArray);
                this.setState({content:[...newArray]});
            }
            this.setState({open: false, id: -1});
            return; // if opened article is closing, move first array element to id position and close i
        }
        // if (this.state.open === true && this.state.id !== 0) {
        //     let tmp = this.state.content.sort((a, b) => a.id - b.id);
        //     newArray.push(tmp[i]);
        //     newArray.push(...tmp.slice(0, i));
        //     newArray.push(...tmp.slice(i+1));
        //     console.table(newArray);
        //     this.setState({content:[...newArray]});
        //     this.setState({id:i});
        //     return; // if an article is opening but another is opened, close id and open i
        // } DOESN'T WORK, ISN'T THAT GOOD, MAYBE DELETED LATER
    };

    isOpen(i) {
        if (i === 0 && this.state.open === true)
            return(this.styleOpen);
        return(this.style);
    };

    showArticle() {
        return(this.state.content.map((object, i) => {
            return(
                <div key={i} style={(this.isOpen(i)).global}>
                    <img src={object.img} style={this.isOpen(i).img}/>
                    <div style={this.isOpen(i).div}>
                        <h5 style={this.isOpen(i).h5}>{object.title}</h5>
                        <p style={this.isOpen(i).p}>{object.desc}</p>
                        <div style={this.isOpen(i).buttonDiv}>
                            <button onClick={() => this.onClickMore(object, i)} type="button" className={(this.isOpen(i)).buttonParam.className} style={this.style.button}>{this.isOpen(i).buttonParam.text}</button>
                        </div>
                    </div>
                </div>
            );
        }));
    };

    render() {
        return (
            <div>
                <div>
                    {this.showArticle()}
                </div>
            </div>
        )
    }
}