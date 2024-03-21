import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

export default function HomeSchedule() {
    const navigation = useNavigation();
    const swiper = useRef();
    const [value, setValue] = useState(new Date());
    const [week, setWeek] = useState(0);

    const weeks = React.useMemo(() => {
        const start = moment().add(week, 'weeks').startOf('week');

        return [-1, 0, 1].map(adj => {
            return Array.from({ length: 7 }).map((_, index) => {
                const date = moment(start).add(adj, 'week').add(index, 'day');

                return {
                    weekday: date.format('ddd'),
                    date: date.toDate(),
                };
            });
        });
    }, [week]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingVertical: 24 }}>
                <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                        <Octicons name='three-bars' size={30} color='#000' />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{}}>
                            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>You Schedule</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("Notification") }}
                        style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                    >
                        <AntDesign name='bells' size={30} color='black' />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, maxHeight: 74, paddingVertical: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <Swiper
                        index={1}
                        ref={swiper}
                        loop={false}
                        showsPagination={false}
                        onIndexChanged={ind => {
                            if (ind === 1) {
                                return;
                            }
                            setTimeout(() => {
                                const newIndex = ind - 1;
                                const newWeek = week + newIndex;
                                setWeek(newWeek);
                                setValue(moment(value).add(newIndex, 'week').toDate());
                                swiper.current.scrollTo(1, false);
                            }, 100);
                        }}>
                        {weeks.map((dates, index) => (
                            <View
                                style={{ width: width, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginHorizontal: -4 }}
                                key={index}>
                                {dates.map((item, dateIndex) => {
                                    const isActive = value.toDateString() === item.date.toDateString();
                                    return (
                                        <TouchableWithoutFeedback
                                            key={dateIndex}
                                            onPress={() => setValue(item.date)}>
                                            <View
                                                style={[
                                                    { flex: 1, height: 50, marginHorizontal: 4, paddingVertical: 6, paddingHorizontal: 4, borderWidth: 1, borderRadius: 8, borderColor: '#e3e3e3', flexDirection: 'column', alignItems: 'center' },
                                                    isActive && { backgroundColor: '#7F3DFF', borderColor: '#7F3DFF' },
                                                ]}>
                                                <Text
                                                    style={[
                                                        { fontSize: 13, fontWeight: '500', color: '#737373', marginBottom: 4 },
                                                        isActive && { color: '#fff' },
                                                    ]}>
                                                    {item.weekday}
                                                </Text>
                                                <Text
                                                    style={[
                                                        { fontSize: 15, fontWeight: '600', color: '#111' },
                                                        isActive && { color: '#fff' },
                                                    ]}>
                                                    {item.date.getDate()}
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    );
                                })}
                            </View>
                        ))}
                    </Swiper>
                </View>

                <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
                    <Text style={{ fontSize: 17, fontWeight: '600', color: '#999999', marginBottom: 12 }}>{value.toDateString()}</Text>
                    <View style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0, height: 400, marginTop: 0, padding: 0, backgroundColor: 'transparent' }}>
                        <View style={{ borderWidth: 4, borderColor: '#e5e7eb', borderStyle: 'dashed', borderRadius: 9, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                            <TouchableOpacity 
                                onPress={() => {navigation.navigate('DetailSchedule')}}
                                style={{ flexDirection: 'column', margin: 5, padding: 10, borderWidth: 1, borderRadius: 10, backgroundColor: '#8F57FF', borderColor: '#8F57FF' }}>
                                <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tiêu Đề</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff' }}>4:44PM</Text>
                                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff' }}> - </Text>
                                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff' }}>5:00PM</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}
