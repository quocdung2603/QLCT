import { Card } from "@rneui/themed";
import React from "react";
import { Image, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Slider, Icon } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";


function ItemBudget() {
    const navigate= useNavigation();
    const handleDetail =()=>{
        navigate.navigate("DetailBudget");
    }
    return ( 
        <View style={{ width: 350, height: 200, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleDetail} style={{ flex: 0.5, height: 35 }}>
                                <View style={{
                                    width: 130, height: 35,
                                    alignItems: "center", justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 25,
                                    flexDirection: 'row',
                                    borderWidth: 1
                                }}>
                                    <View style={{ height: 18, width: 20, borderRadius: 20, backgroundColor: 'blue', marginRight: 10 }}></View>
                                    <Text>Shopping</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 35 }}>

                            </View>
                        </View>
                        <View style={{ position: "relative", marginTop: 20 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Remaining $0</Text>
                            <View style={[styles.contentView]}>
                                <Slider
                                    style={{ borderRadius: 20 }}
                                    maximumValue={500000}
                                    minimumValue={0}
                                    step={1}
                                    minimumTrackTintColor="#7F3DFF"
                                    maximumTrackTintColor="#BEBEBE"
                                    allowTouchTrack
                                    trackStyle={{ height: 20, backgroundColor: "#7F3DFF", borderRadius: 20 }}
                                    thumbTintColor="transparent" // Ẩn chấm hình tròn
                                    value={200000}
                                    disabled={true}
                                />
                            </View>
                            <Text style={{color: 'black', fontSize: 15}}>$1200 of $1000</Text>
                            <Text style={{color: 'red', fontSize: 15}}>cảnh báo</Text>
                        </View>
                    </View>
     );
}

export default ItemBudget;

const styles = StyleSheet.create({
    contentView: {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});