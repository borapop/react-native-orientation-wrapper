# react-native-orientation-wrapper
Component that listens orientation changes and passes width and height to the child components

Usage:
```
import OrientationWrapper from 'react-native-orientation-wrapper'
...
<OrientationWrapper>
  <YourComponent />
</OrientationWrapper>


// YourComponent

class YourComponent extends Component {
  render() {
    const { height, width } = this.props
    ...
  }
}

```
