import { Card } from "@rneui/themed";
import React from "react";
import { Image, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Slider, Icon } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import Item from "antd/es/list/Item";


function ItemBudget(props) {
    const budget = props.budget;
    const navigate = useNavigation();
    const handleDetail = () => {
        const id = budget.nameBudget;
        navigate.navigate("DetailBudget", { budget });
    }
    return (
        <TouchableOpacity 
            onPress={handleDetail}
            style={{marginVertical: 10, borderWidth:1, borderRadius:10, padding:5, borderColor:'#D3BDFF', backgroundColor:'#D3BDFF'}}>
            <View style={{ flexDirection: 'row' }}>
                <View  style={{ flex: 0.5, height: 35 }}>
                    <View style={{
                        width: 130, height: 35,
                        alignItems: "center", justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 25,
                        flexDirection: 'row',
                        borderWidth: 1
                    }}>
                        <View style={{ height: 18, width: 20, height:20, borderRadius: 10, backgroundColor: '#7F3DFF', marginRight: 10 }}></View>
                        <Text style={{fontWeight:'bold', color:'#000', fontSize:17}}>{budget.nameBudget}</Text>
                    </View>
                </View>
                <View style={{ height: 35 }}>

                </View>
            </View>
            <View style={{ position: "relative", marginTop: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Định mức {budget.remaining}đ</Text>
                <View style={[styles.contentView]}>
                    <Slider
                        style={{ borderRadius: 20 }}
                        maximumValue={budget.value}
                        minimumValue={0}
                        step={1}
                        minimumTrackTintColor="#7F3DFF"
                        maximumTrackTintColor="#BEBEBE"
                        allowTouchTrack
                        trackStyle={{ height: 20, backgroundColor: "#7F3DFF", borderRadius: 20 }}
                        thumbTintColor="transparent" // Ẩn chấm hình tròn
                        value={budget.remaining}
                        disabled={true}
                    />
                </View>
                <Text style={{ color: 'black', fontSize: 15 }}>
                    {budget.remaining <= budget.value ? (budget.value - budget.remaining) : 0}đ của {budget.value}đ
                </Text>

                {
                    budget.remaining <= budget.messageBudget ?
                        <Text style={{ color: 'red', fontSize: 15 }}>cảnh báo</Text>
                        :
                        null
                }
            </View>
        </TouchableOpacity>
    );
}

export default ItemBudget;

const styles = StyleSheet.create({
    contentView: {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});