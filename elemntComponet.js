// An Element is a plain object describing what you want to appear on the screen 
// in terms of the DOM nodes or other components. Elements can contain other Elements 
// in their props. 
// Creating a React element is cheap. Once an element is created, it cannot be mutated.


const myElement=<div id="login-btn">Login</div>



// The above React.createElement() function returns an object as below:

// {
//   type: 'div',
//   props: {
//     children: 'Login',
//     id: 'login-btn'
//   }
// }

const Button = ({ handleLogin }) => (
    <div id={"login-btn"} onClick={handleLogin}>
      Login
    </div>
  );

//   Whereas a component can be declared in several different ways. It can be a class with a 
//   render() method or it can be defined 
//   as a function. In either case, it takes props as an input, 
//   and returns a JSX tree as the output:

//   Then JSX gets transpiled to a React.createElement() function tree:

// const Button = ({ handleLogin }) =>
//   React.createElement(
//     "div",
//     { id: "login-btn", onClick: handleLogin },
//     "Login"
//   );