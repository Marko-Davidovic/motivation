import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = { quote:'',
            author: '',}

  componentDidMount(){
    // console.log("componentDidMount")
    this.fetchQuote();
  }
  randomNumber (min, max) {  return Math.floor(Math.random() * (max - min)) + min; };

  fetchQuote = () => {
     axios.get("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
        .then((response) => {
          const quote = response.data[this.randomNumber(0, response.data.length-1)].quote;
          const author = response.data[this.randomNumber(0, response.data.length-1)].author;

          this.setState({ quote });
          this.setState({ author });
           // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);

        });

  }
  render(){

    return(
      <div className="app">
        <div className="card col-md-10">
          <h1 className="heading">{this.state.quote}</h1>
          <h2>"<i>{this.state.author}</i>"</h2>
          <button className="button" onClick={this.fetchQuote}>
            <span>GIVE ME QUOTE!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
