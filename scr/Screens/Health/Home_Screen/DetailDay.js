import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    Text,
    Dimensions,
    TouchableOpacity,
    Modal,
    ScrollView,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailDay = ({ navigation, TatModal}) => {
    return (
        <View style={{ flexDirection: 'column', backgroundColor: 'white', width: 400, height: 700, borderRadius: 10, padding: 20 }}>
            <TouchableOpacity onPress={() => { TatModal(false) }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ marginStart: 'auto', fontSize: 20, fontWeight: 'bold', color: '#000' }}>Chi tiết ngày tập</Text>
                <AntDesign name="close" size={30} color='#000' style={{ marginStart: 'auto' }} />
            </TouchableOpacity>
            <ScrollView>
                <View style={{ flexDirection: 'column', margin: 5 }}>
                    <View style={{ height: 200, backgroundColor: 'yellow' }}>
                        {/* biểu đồ tròn thể hiện calo */}
                    </View>
                    <View style={{ flexDirection: 'column', marginVertical: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>Tổng Thời Gian Luyện Tập</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>02:00</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginVertical: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>Tổng Calo Tiêu Tốn</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>320 Kcals</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center', margin: 10 }}>Danh sasch các bài đã tập</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000', marginEnd: 'auto' }}>12:00</Text>
                    <View style={{ width: 300, marginVertical: 3, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 8, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>Nghiêng vai với tạ đơn</Text>
                            <Text style={{ fontSize: 14, color: '#000' }}>12 lần / hiệp</Text>
                        </View>
                        <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                            <Text>Hình ảnh</Text>
                            <Text>Hình ảnh</Text>
                            <Text>Hình ảnh</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

export default DetailDay