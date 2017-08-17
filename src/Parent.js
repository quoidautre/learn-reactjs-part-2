import React from 'react';
import { Child } from './Child';
import { Sibling } from './Sibling';

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
        <div>
          <Child
              onChange={this.changeName} />
          <Sibling
              name={this.state.name}
          />
        </div>
      </p>

    </div>
    )
  }
}
export default Parent;