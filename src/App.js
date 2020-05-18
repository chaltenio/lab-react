import React, { Component } from 'react';
import Articles from './components/Articles';

import './App.css';

class App extends Component {
state = {
  articles: [
    {
      id: 1,
      description: 'Article 1',
      bought: false
    },
    {
      id: 2,
      description: 'Article 2',
      bought: true
    },
    {
      id: 3,
      description: 'Article 3',
      bought: false
    },        
  ]
}

  render() {
    return (
      <div className="App">
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
