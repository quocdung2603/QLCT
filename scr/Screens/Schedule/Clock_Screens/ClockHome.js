import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    alert
} from 'react-native';
//thu vien ngoai
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
//icon
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ClockHome = ()  => {
    //tab
    const [TabA, setTabA] = useState(1);
    const [TabB, setTabB] = useState(0);
    
    //stopwatch
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

    //timer
    const [selectedTime, setSelectedTime] = useState(''); // Thời gian đếm ngược mặc định là 5 phút (300 giây)
    const [isRunning1, setIsRunning1] = useState(false);

    const startTimer = () => {
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
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginVertical:50}}>
                <TouchableOpacity 
                    style={{borderWidth:1, borderRadius:10, paddingHorizontal:30, paddingVertical:5, marginEnd:20
                        ,backgroundColor: (TabA == 1 ? "#7F3DFF" : "white") }}
                    onPress={() => {
                        TabA == 0 ? setTabA(1) : setTabA(0);
                        setTabB(0)
                    }}>
                    <MaterialCommunityIcons name="timer" size={40} color={(TabA == 1 ? "white" : "#7F3DFF")} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{borderWidth:1, borderRadius:10, paddingHorizontal:30, paddingVertical:5, marginStart:20
                        , backgroundColor: (TabB == 1 ? "#7F3DFF" : "white")}}
                    onPress={() => {
                        TabB == 0 ? setTabB(1) : setTabB(0);
                        setTabA(0)
                    }}>
                    <MaterialCommunityIcons name="timer-sand-complete" size={40} color={(TabB == 1 ? "white" : "#7F3DFF")} />
                </TouchableOpacity>
            </View>
            {TabA === 1 ? (
                <View style={{flex:1, backgroundColor:'yellow'}}>
                    <View style={styles.container}>
                        <Stopwatch
                            laps
                            msecs
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
                                    <Text style={styles.buttonText}>Start</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.button} onPress={stopStopwatch}>
                                    <Text style={styles.buttonText}>Stop</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.button} onPress={resetStopwatch}>
                                <Text style={styles.buttonText}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={{flex:1, backgroundColor:'violet'}}>
                    <View style={styles.container}>
                        {selectedTime=='' ? null : 
                            <Timer
                                totalDuration={parseInt(selectedTime, 10)} // Thời gian đếm ngược từ giá trị của TextInput
                                msecs
                                start={isRunning1}
                                reset={false}
                                options={options}
                                handleFinish={onTimerComplete}
                            />}
                        <TextInput
                            style={styles.input}
                            value={selectedTime}
                            onChangeText={setSelectedTime}
                            keyboardType="numeric"
                            placeholder="Enter time in seconds"
                        />
                        <View style={styles.buttonsContainer}>
                            {!isRunning1 ? (
                                <TouchableOpacity style={styles.button} onPress={startTimer}>
                                    <Text style={styles.buttonText}>Start</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.button} onPress={stopTimer}>
                                    <Text style={styles.buttonText}>Pause</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={styles.button} onPress={resetTimer}>
                                <Text style={styles.buttonText}>Reset</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        backgroundColor: '#007bff',
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