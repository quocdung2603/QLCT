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
import Octicons from 'react-native-vector-icons/Octicons'
import LisCardBudget from '../../../Components/ListCardBudget';
import ItemBudget from '../../../Components/ItemBudget';
import { useData } from '../../../../DataContext';
const Budget = ({ navigation }) => {
    const {budget}=useData();
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Ngân sách chi tiêu</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <ScrollView>       
                <View style={{ flexDirection: 'column', flex: 1}}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                        <View style={{padding: 20}}>
                            {
                                budget.map((item, index) => {
                                    return (
                                        <ItemBudget key={index} budget={item}></ItemBudget>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{paddingBottom: 30}}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("CreateBudget") }}
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#7F3DFF',
                        justifyContent: 'center', alignContent: 'center',
                        marginHorizontal: 20,
                        borderRadius: 10
                    }}>
                    <Text style={{ fontSize: 20, color: 'white', paddingVertical: 10, }}>Tạo ngân sách</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Budget;