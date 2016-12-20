import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (<div>Hello guys i am yixing {this.props.name}</div>);
  }
}

App.propTypes = {
  name: React.PropTypes.string
};

App.defaultProps = {
  name: 'welcome to react'
};

ReactDOM.render(<App />, document.getElementById('root'));
