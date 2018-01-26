import React, {Component} from 'react';
import PropTypes from 'proptypes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
