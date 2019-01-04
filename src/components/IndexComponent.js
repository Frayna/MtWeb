import React, { Component } from 'react';

export default class IndexComponent extends Component {
    state = {
        content: [
            {
                img: "https://picsum.photos/200/700",
                ref:"dicklit0001",
                title: "Insolite: Test !",
                desc: "Liste d'absences de contenu, le 12 eme ne va pas vous etonner! Cliques pour avoir un gros dicklit!"
            }, {
                img: "https://picsum.photos/500",
                ref:"dicklit0002",
                title: "! tseT :etilosnI",
                desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete"
            }, {
                img: "https://picsum.photos/500",
                ref: "dicklit0002",
                title: "! tseT :etilosnI",
                desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enqueteCet Homme decide de devenir une femme, Elise Lucet mene l'enquete"
            }, {
                img: "https://picsum.photos/500",
                ref: "dicklit0002",
                title: "! tseT :etilosnI",
                desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete"
            }, {
                img: "https://picsum.photos/500",
                ref: "dicklit0002",
                title: "! tseT :etilosnI",
                desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete"
            }, {
                img: "https://picsum.photos/500",
                ref: "dicklit0002",
                title: "! tseT :etilosnI",
                desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete"
            }, {
                img: "https://picsum.photos/500",
                ref: "dicklit0002",
                title: "! tseT :etilosnI",
                desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete"
            }, {
                img: "https://picsum.photos/500",
                ref: "dicklit0002",
                title: "! tseT :etilosnI",
                desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete"
            }
        ]
    };

    style = {
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



    render() {
        return (
            <div>
                <div>
                    {this.state.content.map((content) =>
                        <div key={content.ref} style={this.style.global}>
                            <img src={content.img} style={this.style.img}/>
                            <div style={this.style.div}>
                                <h5 style={this.style.h5}>{content.title}</h5>
                                <p style={this.style.p}>{content.desc}</p>
                                <div style={this.style.buttonDiv}>
                                    <button type="button" className="btn btn-outline-primary btn-sm" style={this.style.button}>more...</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}