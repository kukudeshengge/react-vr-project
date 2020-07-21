import React from 'react';
import { Animated } from 'react-vr';

export default class FadeBox extends React.Component {
    state = {
        fade: new Animated.Value(0)
    }
    componentDidMount() {
        Animated.timing(
            this.state.fade,
            { toValue: 1 }
        ).start();
    }
    render() {
        console.log(this.state.fade)
        return <Animated.View
            style={{
                width: 2,
                height: 2,
                backgroundColor: 'blue',
                opacity: this.state.fade,
                transform:[
                    {translate:[0,0,3]}
                ]
            }}
        >

        </Animated.View>
    }
}

