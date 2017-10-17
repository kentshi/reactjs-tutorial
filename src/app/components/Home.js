import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink(){
    this.props.changeLink(this.state.homeLink);
  }

  onChangeLinkName(event){
    this.setState({
      homeLink: event.target.value
    });
  }

  render(){
    let content = "";
    if(true){
      content = <p>Hello!</p>
    }
    let text = "Something!";
    console.log(this.props);
    return (
      <div>
          <p>In a new Component!</p>
          <p>Your name is {this.props.name}, your age is {this.state.age}</p>
          <p>Status: {this.state.status}</p>
          <hr/>
          <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
          <hr/>
          <button onClick={() => this.props.greet} className="btn btn-default">Greet</button>
          <hr/>
          <input type="text"
            onChange={(event) => this.onChangeLinkName(event)}
            value={this.state.homeLink}
          />
          <button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  changeLink: PropTypes.func,
  initialLinkName: PropTypes.string
};
