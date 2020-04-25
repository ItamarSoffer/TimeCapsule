import React, {Component} from 'react';
import {Text, View} from 'react-native';
//import * as Progress from 'react-native-progress';
import {AnimatedCircularProgress, CircularProgress} from "react-native-circular-progress";
import {Bar} from "react-native-progress";
import {extractTime } from './time_utils'

class Progresses extends Component {
    state = {
        fill: 0,
        timeDelta: 1000,

    };

    componentDidMount() {
        setInterval(() => {
            this.setState( {
                fill:this.state.fill + 1,

            })
            },

            this.state.timeDelta);
    }

    render(){
        return (
            <View>
                <Text> Progress bar from Progress.Bar</Text>
                <Bar progress={0.2} width={200} />

                <Text> Animated Circular Progress</Text>
                <AnimatedCircularProgress
                    size={120}
                    width={5}
                    fill={this.state.fill}
                    tintColor="#00e0ff"
                    backgroundWidth={20}
                    backgroundColor={'#e4e4e4'}

                >
                    {/* inside the circle!*/}
                    {
                        (fill) => (
                            <Text>
                                { extractTime(this.state.fill) }
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>

                <CircularProgress size={120} width={15} fill={70} />

            </View>


        )
    }
}

export default Progresses