import React from 'react';

export class Sibling extends React.Component {
    render() {
        var name = this.props.name;
        console.log("Sibling::render(name): " + name);

        return (
            <div>
                <h1>Hey, my name is {name}!</h1>
                <h2>Don't you think {name} is the prettiest name ever?</h2>
                <h2>Sure am glad that my parents picked {name}!</h2>
            </div>
        );
    }
}