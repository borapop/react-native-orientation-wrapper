// @flow

import React, { Component } from 'react'
import typeof Node from 'react'
import { Dimensions } from 'react-native'

const { width: initialWidth, height: initialHeight } = Dimensions.get('window')

type Props = {
  children?: Node,
}

type State = {
  width: number,
  height: number,
}

class OrientationWrapper extends Component<Props, State> {
  state = {
    width: initialWidth,
    height: initialHeight,
  }

  componentDidMount() {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      this.setState({
        width,
        height,
      })
    })
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', () => {})
  }

  render() {
    const {
      width,
      height,
    } = this.state

    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        height,
        width,
      }))
  }
}

export default OrientationWrapper
