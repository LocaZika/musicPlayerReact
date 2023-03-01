import React, { Component } from 'react'

export default class Control extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: 0,
    }
  }

  render() {
    return (
      <audio></audio>
    )
  }
}
