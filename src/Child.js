import React from 'react';

export class Child extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        console.log("Child::handleChange(name): " + name);
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
              <select
                  id="great-names"
                  onChange={this.handleChange}>

                <option value="Frarthur">Frarthur</option>
                <option value="Gromulus">Gromulus</option>
                <option value="Thinkpiece">Thinkpiece</option>
              </select>
            </div>
        );
    }
}