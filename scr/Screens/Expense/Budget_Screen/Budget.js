import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LisCardBudget from '../../../Components/ListCardBudget';
const Budget = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#7F3DFF' }}>
            <ScrollView>       
                <View style={{ flexDirection: 'row', marginTop: 50, marginBottom: 40, marginHorizontal: 20, justifyContent: 'center', alignContent: 'center' }}>
                    <View style={{ marginEnd: 'auto' }}>
                        <AntDesign name='left' size={25} color='#fff' />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>May</Text>
                    <View style={{ marginStart: 'auto' }}>
                        <AntDesign name='right' size={25} color='#fff' />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                        <LisCardBudget></LisCardBudget>
                    </View>
                </View>
            </ScrollView>
            <View style={{backgroundColor: 'white', paddingBottom: 30}}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("CreateBudget") }}
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#7F3DFF',
                        justifyContent: 'center', alignContent: 'center',
                        marginHorizontal: 20,
                        borderRadius: 10
                    }}>
                    <Text style={{ fontSize: 20, color: 'white', paddingVertical: 10, }}>Create a Budget</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Budget;