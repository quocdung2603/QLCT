import React from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const Home = ({navigation}) => {
    return (
        <View style={{flexDirection:'column', flex: 1}}>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
                <View style={{borderWidth:3, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 'auto'}}>
                    <AntDesign name='user' size={30} color='#000'/>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row'}}>
                    <AntDesign name='down' size={30} color='black'/>
                    <View style={{borderColor:'grey', borderWidth:1}}>
                        <Text style={{color:'black',fontSize:20}}>October</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'}}>
                    <AntDesign name='bells' size={30} color='black'/>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', margin: 5}}>
                <Text style={{fontSize:20}}>Account Balance</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', margin: 5}}>
                <Text style={{fontSize:30, color:'black', fontWeight:'bold'}}>$9400</Text>
            </View>
            <View style={{flexDirection:'row', marginHorizontal:20, marginVertical:10}}>
                <View style={{flexDirection:'row', backgroundColor:'#00A86B', marginEnd:'auto'
                    ,justifyContent:'center',alignItems:'center', padding:5, borderRadius:10,
                }}>
                    <AntDesign name='caretdown' size={50} color='black'/>
                    <View style={{flexDirection:'column', marginStart:5}}>
                        <Text style={{fontSize:20}}>Income</Text>
                        <Text style={{fontSize:30}}>5000</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', backgroundColor:'#FD3C4A', marginStart:'auto'
                    ,justifyContent:'center',alignItems:'center', padding:5, borderRadius:10
                }}>
                    <AntDesign name='caretup' size={50} color='black'/>
                    <View style={{flexDirection:'column', marginStart:5}}>
                        <Text style={{fontSize:20}}>Income</Text>
                        <Text style={{fontSize:30}}>5000</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginRight:'auto', margin:10}}>
                <Text style={{fontSize:20, color:'black', fontWeight:'bold'}}>Spend Frequence</Text>
            </View>
            <View style={{backgroundColor:'yellow', height:200}}>
                {/* bieu do chi tieu cac kieu */}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', margin:5}}>
                <View style={{alignItems: 'center', paddingVertical: 10, borderWidth:1, backgroundColor:'yellow', paddingHorizontal:20, borderRadius:10}}>
                    <Text>Today</Text>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10}}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("test");
                    }}>
                        <Text>Week</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', paddingVertical: 10}}>
                    <Text>Month</Text>
                </View>
                <View style={{alignItems: 'center', paddingVertical: 10}}>
                    <Text>Year</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', margin:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:20, color:'#000', marginEnd:'auto'}}>Recent Transaction</Text>
                <View style={{borderWidth:1, borderRadius:15, padding:5, backgroundColor:''}}>
                    <Text style={{color:'black'}}>See all</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{flexDirection:'row', marginVertical:5, marginHorizontal:25}}>
                    <View style={{backgroundColor:'#FCEED4', padding:10, borderRadius:10}}>
                        <FontAwesome6 name='bowl-food' size={30} color='#FCAC12'/>
                    </View>
                    <View style={{flexDirection:'column', marginStart:10}}>
                        <Text style={{fontSize:18, marginBottom:9, fontWeight:'bold', color:'#000'}}>Shopping</Text>
                        <Text style={{fontSize:15}}>Buy some sextoy</Text>
                    </View>
                    <View style={{flexDirection:'column', marginStart:'auto'}}>
                        <Text style={{fontSize:18, marginBottom:9, color:'red', fontWeight:'bold'}}>-$120</Text>
                        <Text style={{fontSize:15}}>10:00 AM</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home