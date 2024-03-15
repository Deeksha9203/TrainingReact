function Greeting() {
  return <h1>{`Hello,Good Evening`}</h1>;
}


function Greeting({ message }) {
    return <h1>{`Hello, ${message}`}</h1>;
  }


  function Greeting(props) {
    return <h1>{`Hello, ${props.message}`}</h1>;
  }


  const Greeting=()=>{
    
  }