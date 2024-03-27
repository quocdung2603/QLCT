import React, { useState, useRef, useEffect } from 'react';
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
import { useDataSchedule } from '../../../Context/ScheduleContext';

const { width } = Dimensions.get('window');

export default function HomeSchedule() {
    const { schedule } = useDataSchedule();
    console.log(schedule);
    const [scheduleData, setSchudule] = useState(schedule);
    const navigation = useNavigation();
    const swiper = useRef();
    const [value, setValue] = useState(new Date());
    const [week, setWeek] = useState(0);
    useEffect(() => {
        const tmp = formatDate(value);
        const dt = [];
        schedule.map((it) => {
            if (it.dateS === tmp)
                dt.push(it);
        })
        dt.sort((a,b)=>compareFormattedTimes(a.timeS,b.timeS));
        setSchudule(dt);
    }, [schedule])
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
    const formatDate = (dateT) => {
        const selectedDate = new Date(dateT);
        const date = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1;
        const year = selectedDate.getFullYear();
        return `${date}/${month}/${year}`;
    }
    const compareFormattedTimes = (time1, time2) => {
        // Tách giờ, phút và thời gian AM/PM từ mỗi chuỗi
        const [time1Part, period1] = time1.split(' ');
        const [hours1, minutes1] = time1Part.split(':').map(part => parseInt(part, 10));
    
        const [time2Part, period2] = time2.split(' ');
        const [hours2, minutes2] = time2Part.split(':').map(part => parseInt(part, 10));
    
        // Xác định giờ 24 giờ từ thời gian đã định dạng
        let hours24_1 = hours1;
        if (period1 === 'PM' && hours1 !== 12) {
            hours24_1 += 12;
        } else if (period1 === 'AM' && hours1 === 12) {
            hours24_1 = 0;
        }
    
        let hours24_2 = hours2;
        if (period2 === 'PM' && hours2 !== 12) {
            hours24_2 += 12;
        } else if (period2 === 'AM' && hours2 === 12) {
            hours24_2 = 0;
        }
        const totalMinutes1 = hours24_1 * 60 + minutes1;
        const totalMinutes2 = hours24_2 * 60 + minutes2;
    
        // So sánh
        if (totalMinutes1 === totalMinutes2) {
            return 0;
        } else if (totalMinutes1 < totalMinutes2) {
            return -1;
        } else {
            return 1;
        }
    };
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
                                            onPress={() => {
                                                setValue(item.date)
                                                const tmp = formatDate(item.date);
                                                const dt = [];
                                                schedule.map((it) => {
                                                    if (it.dateS === tmp)
                                                        dt.push(it);
                                                })
                                                dt.sort((a,b)=>compareFormattedTimes(a.timeS,b.timeS));
                                                setSchudule(dt);
                                            }}>
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
                            {
                                scheduleData.map((item, index) => {
                                    return <TouchableOpacity
                                        key={index}
                                        onPress={() => { navigation.navigate('DetailSchedule', { item }) }}
                                        style={{ flexDirection: 'column', margin: 5, padding: 10, borderWidth: 1, borderRadius: 10, backgroundColor: '#8F57FF', borderColor: '#8F57FF' }}>
                                        <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff' }}>{item.timeS}</Text>
                                            <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff' }}> - </Text>
                                            <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff' }}>{item.timeE}</Text>
                                        </View>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}
