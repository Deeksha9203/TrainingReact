class Person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }
    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}


class Teacher extends Person{
    constructor(_name,_age,_class){
        super(_name,_age)
        this.class=_class
        
    }
}

const teacher1=new Teacher('eva',22,3)

const person1=new Person('jeena',14)
person1.welcome()




class Greeting extends React.Component {
    render() {
      return <h1>{`Hello, ${this.props.message}`}</h1>;
    }
  }





import React, { Component } from 'react';

class HelloWorldComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default HelloWorldComponent;
