import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    bio: "",
    profession: "",
    show: true,
    img: "",
    time: 0,
  };
  change = () => {
    if (this.state.show) {
      this.setState({
        name: "Ghassen Ben Amor",
        bio: "Born in  14/05/2000",
        profession: "IT Engineer",
        img: 'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/224924663_1307109346400061_6845508279668185727_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aOZHbWMIXfsAX-7eRxZ&_nc_ht=scontent.ftun9-1.fna&oh=d0c6ebad51b3127cdb43256595e2b7e3&oe=6162ED9B'
      });
    }
  };
  counter = () => {
    this.setState({ time: this.state.time + 1 });
    return this.state.time;
  };
  componentDidMount() {
    var t = setInterval(this.counter, 1000);
    this.setState({ time: t });
  }

  render() {
    const result = () => {
      if (this.state.time < 60) {
        return `${this.state.time} secondes`;
      }
      if (this.state.time > 60) {
        return `${Math.trunc(this.state.time / 60)} min and ${
          this.state.time % 60
        }
         sec `;
      }
      if (this.state.time > 3600) {
        return `${Math.trunc(this.state.time / 3600)} hours and ${Math.trunc(
          (this.state.time % 3600) / 60
        )} and ${(this.state.time % 3600) % 60}`;
      }
    };
    return (
      <div className="main">
        <h1>{this.state.name}</h1>
        <p>{this.state.bio}</p>
        <p>{this.state.profession}</p>
        <img src={this.state.img} id="image" />
        <button onClick={this.change}> show me the profile</button>
        <p>{result()}</p>
      </div>
    );
  }
}

export default App;