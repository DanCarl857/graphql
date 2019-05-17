import React from 'react';
import './App.css';

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({ query: '{greeting}'})
  })
  const responseBody = await response.json();
  return responseBody.data.greeting;
}

class App extends React.Component() {

  constructor(props) {
    super(props);
    this.state = {greeting: ''};
  }

  render() {
    const { greeting } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{greeting}</h1>
        </header>
      </div>
    );
  }
}

export default App;
