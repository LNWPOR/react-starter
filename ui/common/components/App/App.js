import React, { Component } from 'react'
import styles from './App.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}