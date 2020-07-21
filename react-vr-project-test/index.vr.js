import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Image,
  View,
  VrButton,
  StyleSheet,
  Animated
} from 'react-vr';
import FadeBox from './components/fadeBox';
const arr = [
  'run1.jpg',
  'run2.jpg',
  'run3.jpg',
  'run4.jpg',
  'run5.jpg',
  'run6.jpg',
  'run7.jpg',
  'run8.jpg',
  'run9.jpg',
  'run10.jpg',
  'run11.jpg',
  'run12.jpg',
  'run13.jpg',
  'run14.jpg',
  'run15.jpg',
  'run16.jpg'
]

let styles = StyleSheet.create({
  'btnView': {
    width: 2,
    height: 1,
    transform: [
      { translate: [-2, 0, 0.5] },
      { rotateY: 180 }
    ]
  },
  'btn-1': {
    width: 0.2,
    height: 0.16,
    backgroundColor: 'red'
  }
})


export default class react_vr_project extends React.Component {
  state = {
    bg: 'yellow',
    bgArr: ['island-garden.jpg', 'test.jpg'],
    index: 0,
    fade: new Animated.Value(0)
  }
  changeSrc = () => {
    let { index } = this.state;
    this.timer = setInterval(() => {
      if (index > arr.length - 1) {
        this.setState({ index: 0 }, () => console.log(this.state.index));
      } else {
        index++;
        this.setState({ index });
      }
    }, 100);
  }
  componentDidMount() {
    // this.changeSrc();
    Animated.timing(
      this.state.fade,
      { toValue: 1 }
    ).start()
  }
  render() {
    let { bg, index, bgArr, fade } = this.state;
    // console.log(src)
    return (
      <Animated.View style={{ opacity: this.state.fade }}>
        <Pano source={asset(bgArr[index])} />
        <FadeBox />
        <View style={styles['btnView']}>
          <VrButton style={styles['btn-1']} onClick={() => this.setState({ index: 1 })} style={styles['btn-1']}>
            <Text style={{ fontSize: 0.05 }}>
              切换场景
            </Text>
          </VrButton>
        </View>
        {/* <View>
          <Image style={{
            // backgroundColor: 'red',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [5, 1],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [0.43, -0.2, -3] },
              {rotateY:114}
          ],
            width: 1.1, height: 0.65
          }} source={asset(arr[index])} />
        </View> */}
        {/* <Text
          onClick={() =>
            this
              .setState({
                bg:
                  'red'
              })}
          onExit={() =>
            this
              .setState({
                bg:
                  'white'
              })}
          style={{
            backgroundColor: bg,
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, 0, -3] }],
          }}>
          dddd
        </Text> */}
      </Animated.View>
    );
  }
};

AppRegistry.registerComponent('react_vr_project', () => react_vr_project);

