import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Switch,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const Notification = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center', margin:10 }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.goBack()}}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 20, marginEnd: 'auto' }}>Notification</Text>
            </View>
        </View>
    )
}

export default Notification;