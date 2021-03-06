// console.log("It Works.");
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Foo extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        }
    }
    onGreet(){
        alert("hello!");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }
  render(){
    return (
      <div className="container">
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Header homeLink={this.state.homeLink}/>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Home
                    name={"Max"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink={(param) => this.onChangeLinkName(param)}
                    initialLinkName={this.state.homeLink}
                />
            </div>
        </div>
      </div>
    );
  }
}

render(<Foo/>, window.document.getElementById("foo"));
