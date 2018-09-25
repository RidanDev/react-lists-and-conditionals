import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'; 
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    //con split posso splittare la stringa userInput per ritornare un array di caratteri
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})
  }

  render() {
    const charList = this.state.userInput.split('').map( (ch, index) => {
      return <Char 
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>
    })

    return (
      <div className="App">
        <h1>Test React #2!</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop.</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text too long enough" depending on the text length (e.g. take 5 as a minumum length).</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display:inline-block, padding:16px, text-align.center, margin:16px, border:1px solid black).</li>
          <li>Render a list of CharComponent where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <hr/>
        <input 
          type="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.userInput} />
        <p>{this.state.userInput.length}</p>
        <Validation 
         inputLength={this.state.userInput.length}/>
         {charList}
      </div>
    );
  }
}

export default App;
