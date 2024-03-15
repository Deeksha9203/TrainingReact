// import React from "react";
// import ReactDOM from "react-dom";

// const ChildComponent = (props) => {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.age}</p>
//     </div>
//   );
// };

// const ParentComponent = () => {
//   return (
//     <div>
//       <ChildComponent name="John" age="30" />
//       <ChildComponent name="Mary" age="25" />
//     </div>
//   );
//};



//class component 

import React from "react";
import ReactDOM from "react-dom";

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
    );
  }
}

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent name="John" age="30" />
        <ChildComponent name="Mary" age="25" />
      </div>
    );
  }
}



//In React, both state and props are plain JavaScript objects and used to manage the data of a 
// component, but they are used in different ways and have different characteristics. 
// state is managed by the component itself and can be updated using the setState() function. 
// Unlike props, state can be modified by the component and is used to manage the internal state 
// of the component. Changes in the state trigger a re-render of the component and its children.
//  props (short for "properties") are passed to a component by its parent component and are 
//  read-only, meaning that they cannot be modified by the component itself. 
// props can be used to configure the behavior of a component and to pass data between components.