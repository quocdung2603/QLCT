import React, { Component } from "react";
import { Animated, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SIZE = 80;
class AddButton extends Component {
    mode = new Animated.Value(0);
    toggleView = () => {
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 ? 1 : 0,
            duration: 300,
        }).start();
    };
    render() {
        const firstX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -40],
        });
        const firstY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50],
        });
        const secondX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 5],
        });
        const secondY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55],
        });
        const thirdX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 50],
        });
        const thirdY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50],
        });
        const opacity = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
        });
        return (
            <View
                style={{
                    position: "absolute",
                    alignItems: "center",
                    bottom: 6,
                }}
            >
                <Animated.View
                    style={{
                        position: "absolute",
                        left: firstX,
                        top: firstY,
                        opacity,
                    }}
                >
                    <TouchableHighlight
                        onPress={() => { }}
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: SIZE / 2 + 5,
                            height: SIZE / 2 + 5,
                            borderRadius: SIZE / 4 + 5,
                            backgroundColor: "#FD3C4A",
                        }}
                    >
                        <MaterialCommunityIcons name="cash-minus" size={20} color="#F8F8F8" />
                    </TouchableHighlight>
                </Animated.View>
                {/* <Animated.View
                    style={{
                        position: "absolute",
                        left: secondX,
                        top: secondY,
                        opacity,
                    }}
                >
                    <TouchableHighlight
                        onPress={() => { }}
                        style={{
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center",
                            width: SIZE / 2,
                            height: SIZE / 2,
                            borderRadius: SIZE / 4,
                            backgroundColor: "#48A2F8",
                        }}
                    >
                        <Icon name="home" size={16} color="#F8F8F8" />
                    </TouchableHighlight>
                </Animated.View> */}
                <Animated.View
                    style={{
                        position: "absolute",
                        left: thirdX,
                        top: thirdY,
                        opacity,
                    }}
                >
                    <TouchableHighlight
                        onPress={() => { }}
                        style={{
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center",
                            width: SIZE / 2 + 5,
                            height: SIZE / 2 + 5,
                            borderRadius: SIZE / 4 + 5,
                            backgroundColor: "#00A86B",
                        }}
                    >
                        <MaterialCommunityIcons name="cash-plus" size={20} color="#F8F8F8" />
                    </TouchableHighlight>
                </Animated.View>
                <TouchableHighlight
                    onPress={this.toggleView}
                    underlayColor="#2882D8"
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: SIZE/2+15,
                        height: SIZE/2+15,
                        borderRadius: SIZE / 2,
                        backgroundColor: "#7F3DFF",
                    }}
                >
                    <Animated.View
                        style={{
                            transform: [{ rotate: rotation }],
                        }}
                    >
                        <Icon name="plus" size={24} color="#F8F8F8" />
                    </Animated.View>
                </TouchableHighlight>
            </View>
        );
    }
}
export { AddButton };