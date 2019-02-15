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
                    // desc: "Liste d'absences de contenu, le 12 eme ne va pas vous etonner! Cliques pour avoir un gros dicklit!",
                    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N",
                    // MAX VIGNETTE : 160C 4L | MAX DESCRIPTION : 1000C 17L
                    fullDesc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.\n" +
                        "\n" +
                        "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.\n" +
                        "\n" +
                        "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.\n" +
                        "\n" +
                        "Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.\n" +
                        "\n" +
                        "Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.\n" +
                        "\n" +
                        "Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi.\n" +
                        "\n" +
                        "Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.\n" +
                        "\n" +
                        "Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ullamcorper mauris at ligula. Fusce fermentum. Nullam cursus lacinia erat.\n" +
                        "\n" +
                        "Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui.\n" +
                        "\n" +
                        "Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce vel dui. Sed in libero ut nibh placerat accumsan. Proin faucibus arcu quis ante. In consectetuer turpis ut velit. Nulla sit amet est.\n" +
                        "\n" +
                        "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Suspendisse feugiat. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra. Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Suspendisse non nisl sit amet velit hendrerit rutrum. Ut leo. Ut a nisl id ante tempus hendrerit.\n" +
                        "\n" +
                        "Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Suspendisse eu ligula. Nulla facilisi. Donec id justo. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Curabitur suscipit suscipit tellus. Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Proin magna. Duis vel nibh at velit scelerisque suscipit. Curabitur turpis. Vestibulum suscipit nulla quis orci.\n" +
                        "\n" +
                        "Fusce ac felis sit amet ligula pharetra condimentum. Maecenas egestas arcu quis ligula mattis placerat. Duis lobortis massa imperdiet quam. Suspendisse potenti. Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Sed libero. Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh.\n" +
                        "\n" +
                        "Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.\n" +
                        "\n" +
                        "Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vit "
                }, {
                    id:2,
                    img: "https://picsum.photos/700",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }, {
                    id:3,
                    img: "https://picsum.photos/800",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }, {
                    id:4,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }, {
                    id:5,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }, {
                    id:6,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }, {
                    id:7,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }, {
                    id:8,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }, {
                    id:9,
                    img: "https://picsum.photos/900",
                    title: "! tseT :etilosnI",
                    desc: "Cet Homme decide de devenir une femme, Elise Lucet mene l'enquete",
                    fullDesc:""
                }
            ]
        };

        this.style = {
            fullDesc:{
                visibility:"hidden",
                display:"none"
            },
            buttonParam:{
                className:"btn btn-outline-primary btn-sm",
                text:"More..."
            },
            topDiv:{
                className:"col-xs-12 col-sm-12 col-md-6 col-lg-4",
                style:{
                    display:"inline-block",
                    verticalAlign:"top",
                }
            },
            global:{
                margin:"10px",
                padding:0,
                height:"400px",
                border:"1px solid #AAA",
                borderRadius:"20px",
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
            fullDesc:{
                visibility:"visible",
                display:"block",
                marginTop:"55%",
                fontSize:"17px",
                paddingLeft:"15px",
                paddingRight:"25px"
            },
            topDiv:{
                className:"container",
                style:{
                    backgroundColor:"#FFF",
                    position:"fixed",
                    top:56,
                    width:"100%",
                    height:"90%",
                    overflow:"auto",
                    verticalAlign:"center",
                    zIndex:"1000",
                }
            },
            buttonParam:{
                className:"btn btn-danger btn-sm",
                text:"Close"
            },
            global:{
                paddingTop:"10px",
                width:"100%",
                height:"100%",
                overflow:"auto",
            },
            img:{
                margin:0,
                width:"50%",
                float:"left",
                borderRadius:"20px",
            },
            div:{
                marginTop:"10px",
                width:"50%",
                float:"right",
                padding:"15px",
                paddingTop:"15px",
            },
            h5:{
                fontSize:"50px",
                margin:0
            },
            p:{
                height:"60%",
                margin:0,
                marginTop:"15px",
                fontSize:"18px"
            },
            buttonDiv:{
                position:"fixed",
                top:"10px",
                right:"20px",
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
                    <div className={(this.isOpen(i)).topDiv.className} style={this.isOpen(i).topDiv.style}>
                        <div key={i} style={(this.isOpen(i)).global}>
                            <img alt="" src={object.img} style={this.isOpen(i).img}/>
                            <div style={this.isOpen(i).div}>
                                <h5 style={this.isOpen(i).h5}>{object.title}</h5>
                                <p style={this.isOpen(i).p}>{object.desc}</p>
                                <div style={this.isOpen(i).buttonDiv}>
                                    <button onClick={() => this.onClickMore(object, i)} type="button" className={(this.isOpen(i)).buttonParam.className} style={this.style.button}>{this.isOpen(i).buttonParam.text}</button>
                                </div>
                            </div>
                            <p style={this.isOpen(i).fullDesc}>{object.fullDesc}</p>
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