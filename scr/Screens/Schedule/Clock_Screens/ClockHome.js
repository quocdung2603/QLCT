import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, FlatList, Modal, Switch } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ClockHome = ({ navigation }) => {
    const [TabA, setTabA] = useState(1);
    const [TabB, setTabB] = useState(0);
    const [TabC, setTabC] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const stopwatchRef = useRef(null);

    const startStopwatch = () => {
        setIsRunning(true);
        stopwatchRef.current.start();
    };

    const stopStopwatch = () => {
        setIsRunning(false);
        stopwatchRef.current.stop();
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        stopwatchRef.current.reset();
    };

    const [selectedTime, setSelectedTime] = useState('');

    const [isRunning1, setIsRunning1] = useState(false);

    const startTimer = () => {
        const totalSeconds = parseInt(selectedTime, 10) * 60;
        setSelectedTime(totalSeconds.toString());
        setIsRunning1(true);
    };

    const stopTimer = () => {
        setIsRunning1(false);
    };

    const resetTimer = () => {
        setIsRunning1(false);
        setSelectedTime('');
    };

    const onTimerComplete = () => {
        console.log('Timer completed!');
    };

    // đếm ngược thời gian
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [counting, setCounting] = useState(false);
    const intervalRef = useRef(null);

    const handleStart = () => {
        if (counting || totalSeconds <= 0) return;

        intervalRef.current = setInterval(() => {
            setTotalSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        setCounting(true);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTotalSeconds(0);
        setCounting(false);
    };

    const formatTime = totalSeconds => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // báo thức 
    const [modalVisible, setModalVisible] = useState(false);
    const [alarms, setAlarms] = useState([]);
    const [selectedHour, setSelectedHour] = useState('');
    const [selectedMinute, setSelectedMinute] = useState('');
    const [selectedAlarmIndex, setSelectedAlarmIndex] = useState(null);
    const [alarmMessage, setAlarmMessage] = useState('');

    const handleAddAlarm = () => {
        if (!selectedHour || !selectedMinute || isNaN(selectedHour) || isNaN(selectedMinute)) return;

        const newAlarm = { hour: parseInt(selectedHour), minute: parseInt(selectedMinute), active: true, message: alarmMessage };
        if (selectedAlarmIndex !== null) {
            const updatedAlarms = [...alarms];
            updatedAlarms[selectedAlarmIndex] = newAlarm;
            setAlarms(updatedAlarms);
        } else {
            setAlarms(prevAlarms => [...prevAlarms, newAlarm]);
        }
        setModalVisible(false);
        setSelectedHour('');
        setSelectedMinute('');
        setAlarmMessage('');
        setSelectedAlarmIndex(null);
    };

    const handleEditAlarm = index => {
        setSelectedAlarmIndex(index);
        setSelectedHour(alarms[index].hour.toString());
        setSelectedMinute(alarms[index].minute.toString());
        setAlarmMessage(alarms[index].message);
        setModalVisible(true);
    };

    const handleToggleSwitch = index => {
        const updatedAlarms = [...alarms];
        updatedAlarms[index].active = !updatedAlarms[index].active;
        setAlarms(updatedAlarms);
    };

    const handleDeleteAlarm = index => {
        const updatedAlarms = [...alarms];
        updatedAlarms.splice(index, 1);
        setAlarms(updatedAlarms);
    };

    const renderItem = ({ item, index }) => (
        <View style={{ marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>{item.hour.toString().padStart(2, '0')}:{item.minute.toString().padStart(2, '0')} - {item.message}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                        value={item.active}
                        onValueChange={() => handleToggleSwitch(index)}
                    />
                    <Button title="Edit" onPress={() => handleEditAlarm(index)} />
                    <Button title="Delete" onPress={() => handleDeleteAlarm(index)} />
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Bấm giờ và hẹn giờ</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 5, marginEnd: 20
                        , backgroundColor: (TabC == 1 ? "#7F3DFF" : "white")
                    }}
                    onPress={() => {
                        TabC == 0 ? setTabC(1) : setTabC(0);
                        setTabB(0)
                        setTabA(0)
                    }}>
                    <MaterialCommunityIcons name="alarm" size={40} color={(TabC == 1 ? "white" : "#7F3DFF")} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 5, marginEnd: 20
                        , backgroundColor: (TabA == 1 ? "#7F3DFF" : "white")
                    }}
                    onPress={() => {
                        TabA == 0 ? setTabA(1) : setTabA(0);
                        setTabB(0)
                        setTabC(0)
                    }}>
                    <MaterialCommunityIcons name="timer" size={40} color={(TabA == 1 ? "white" : "#7F3DFF")} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderWidth: 1, borderRadius: 10, paddingHorizontal: 30, paddingVertical: 5, marginStart: 20
                        , backgroundColor: (TabB == 1 ? "#7F3DFF" : "white")
                    }}
                    onPress={() => {
                        TabB == 0 ? setTabB(1) : setTabB(0);
                        setTabA(0)
                        setTabC(0)
                    }}>
                    <MaterialCommunityIcons name="timer-sand-complete" size={40} color={(TabB == 1 ? "white" : "#7F3DFF")} />
                </TouchableOpacity>
            </View>
            {TabA === 1 ? (
                <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                    <View style={styles.container}>
                        <Stopwatch
                            laps
                            start={isRunning}
                            ref={stopwatchRef}
                            options={options}
                            getTime={(time) => {
                                console.log(time);
                            }}
                        />
                        <View style={styles.buttonsContainer}>
                            {!isRunning ? (
                                <TouchableOpacity style={styles.button} onPress={startStopwatch}>
                                    <Text style={styles.buttonText}>Bắt đầu</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.button} onPress={stopStopwatch}>
                                    <Text style={styles.buttonText}>Tạm dừng</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.button} onPress={resetStopwatch}>
                                <Text style={styles.buttonText}>Đặt lại</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ) : TabB === 1 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {counting && (
                        <Text style={{ fontSize: 35, color: '#7F3DFF', marginBottom: 20 }}>
                            {formatTime(totalSeconds)}
                        </Text>
                    )}
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 20, paddingHorizontal: 10, textAlign: 'center' }}
                        onChangeText={text => setTotalSeconds(parseInt(text) * 60)}
                        keyboardType="numeric"
                        placeholder="Enter minutes"
                        editable={!counting}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={handleStart} disabled={counting}>
                            <Text style={styles.buttonText}>Bắt đầu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleReset} disabled={!counting && totalSeconds === 0}>
                            <Text style={styles.buttonText}>Đặt lại</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button title="Add Alarm" onPress={() => setModalVisible(true)} />
                    <FlatList
                        data={alarms}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(false);
                            setSelectedAlarmIndex(null);
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                                <Text style={{ fontSize: 18, marginBottom: 10 }}>Set Alarm</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                                    onChangeText={text => setSelectedHour(text)}
                                    value={selectedHour}
                                    keyboardType="numeric"
                                    placeholder="Hour"
                                />
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                                    onChangeText={text => setSelectedMinute(text)}
                                    value={selectedMinute}
                                    keyboardType="numeric"
                                    placeholder="Minute"
                                />
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                                    onChangeText={text => setAlarmMessage(text)}
                                    value={alarmMessage}
                                    placeholder="Alarm Message"
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                                    <Button title="OK" onPress={handleAddAlarm} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            )}
        </View>
    );
}

const options = {
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 250,
        alignItems: 'center',
    },
    text: {
        fontSize: 35,
        color: '#7F3DFF',
        marginLeft: 7,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#7F3DFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: 200,
        textAlign: 'center',
    },
});

export default ClockHome;
