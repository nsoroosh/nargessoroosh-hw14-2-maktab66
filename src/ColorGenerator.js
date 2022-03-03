import React, { Component } from 'react'
import Color from './Color';

export default class ColorGenerator extends Component {
    constructor() {
        super()
        this.state = {
            colors: []
        }
        this.addcolor = this.addcolor.bind(this)
    }
    addcolor() {
        var randomColor = `# ${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.setState({ colors: [...this.state.colors,randomColor] })
        console.log(this.state.colors);

    }
    render() {
        return (
            <div>
                

                <ul>
                <button onClick={this.addcolor} >add color</button>
                {this.state.colors.map(color => <Color list={color}/>)}
                
                
                
                </ul>
                
            </div>
        )
    }
}

