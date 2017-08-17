import React from 'react';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {
    console.log("Parent::changeName(newName): " + newName);
    this.setState({
      name: newName
    });
  }

  render() {
    return (
    <div className="App">

      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>

      <p className="App-intro">
        <Child name={this.state.name} onChange={this.changeName} />
      </p>

    </div>
    )
  }
}
export default Parent;