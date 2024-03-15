import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    // State can be initialized in the constructor
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // Lifecycle method called after the component has been inserted into the DOM
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    // Lifecycle method called after the component updates
    console.log('Component updated');
  }

  componentWillUnmount() {
    // Lifecycle method called before the component is removed from the DOM
    console.log('Component will unmount');
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyClassComponent;
