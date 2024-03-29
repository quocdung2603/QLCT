import React, { useEffect } from "react";
import { Animated, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SIZE = 80;

const AddButton2 = () => {
    const navigation = useNavigation();
    const mode = new Animated.Value(0);

    const toggleView = () => {
        Animated.timing(mode, {
            toValue: mode._value === 0 ? 1 : 0,
            duration: 300,
        }).start();
    };

    const firstX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [20, -40],
    });

    const firstY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -50],
    });

    const thirdX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 50],
    });

    const thirdY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -50],
    });

    const opacity = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const rotation = mode.interpolate({
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
            <TouchableHighlight
                onPress={() => { navigation.navigate('AddSchedule')}}
                underlayColor="#2882D8"
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: SIZE / 2 + 15,
                    height: SIZE / 2 + 15,
                    borderRadius: SIZE / 2,
                    backgroundColor: "#7F3DFF",
                }}
            >
                <Animated.View
                    style={{
                        transform: [{ rotate: rotation }],
                    }}
                >
                    <MaterialCommunityIcons name="plus" size={24} color="#F8F8F8" />
                </Animated.View>
            </TouchableHighlight>
        </View>
    );
};

export { AddButton2 };
