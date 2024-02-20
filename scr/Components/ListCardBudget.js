import { Card } from "@rneui/themed";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Slider, Icon } from '@rneui/themed';
import ItemBudget from "./ItemBudget";
function LisCardBudget() {
    const List = Array.from({ length: 12 }, (_, index) => index);
    return (
        <View style={{ padding: 20 }}>
            {
                List.map((it, index) => (
                    <ItemBudget key={index}></ItemBudget>
                ))
            }
        </View>
    );
}

export default LisCardBudget;
