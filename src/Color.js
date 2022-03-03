import React, { Component } from 'react'

export default class Color extends Component {
  render() {
    return (
      <div>
          <ul>
              <li>
              {this.props.list}
              </li>
          </ul>
      </div>
    )
  }
}
