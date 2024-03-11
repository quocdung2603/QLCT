import React, { useState } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Slider, Icon } from '@rneui/themed';
import DropdownComponent from '../../../Components/DropDownBudget';
import { Dropdown } from 'react-native-element-dropdown';
import { Switch } from '@rneui/themed';
import { useData } from '../../../../DataContext';

const data = [
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Market', value: 'Market' },
    { label: 'Education', value: 'Education' },
    { label: 'Save money', value: 'Save money' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
const CreateBudget = () => {
    const {addBudget}=useData();
    const navigation = useNavigation();
    const [ValueBudget, setValueBudget] = useState(0);
    const [typeBudget, setTypeBudget] = useState(0);
    const [messageBudget,setMessageBudget]=useState(0);
    const CircleIconWithNumber = ({ icon, number }) => {
        return (
            <View style={styles.circle}>
                <Text style={styles.number}>{messageBudget}</Text>
            </View>
        );
    };

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === typeBudget && (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
            </View>
        );
    };
    const [checked, setChecked] = useState(false);
    const handleAdd=()=>{
        const item = {
            nameBudget: typeBudget,
            value: ValueBudget,
            messageBudget: messageBudget
        }
        addBudget(item);
        setTypeBudget(0);
        setMessageBudget(0);
        setValueBudget("");
        navigation.navigate("Home");
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#7F3DFF', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={20} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, marginEnd: 'auto' }}>Create Budget</Text>
            </View>
            <View style={{ flexDirection: 'column', marginHorizontal: 20, marginTop: 'auto' }}>
                <Text style={{ fontSize: 15, color: '#BEBEBE' }}>How Much do you want to spend? </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 60, color: 'white' }}>
                        $
                    </Text>
                    <TextInput
                        onChangeText={(txt) => setValueBudget(txt)}
                    >
                        <Text style={{ fontSize: 50, color: 'white', }}>
                            {ValueBudget}
                        </Text>
                    </TextInput>
                </View>
            </View>
            <View style={{ height: 400, flexDirection: 'column', borderWidth: 1, borderColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: 'white', paddingVertical: 20 }}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={typeBudget}
                    onChange={item => {
                        setTypeBudget(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                    renderItem={renderItem}
                />
                <View style={{height: 120, padding: 10}}>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 20, marginRight: 'auto' }}>Receive Alert</Text>
                            <Text style={{ color: 'grey', fontSize: 15, marginRight: 'auto' }}>Receive alert when it reachs some points</Text>
                        </View>
                        <View style={{ marginStart: 'auto', justifyContent: 'center', alignContent: 'center' }}>
                            <Switch
                                value={checked}
                                onValueChange={(value) => setChecked(value)}
                            />
                        </View>
                    </View>
                    {
                        checked &&
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                            <View style={[styles.contentView]}>
                                <Slider
                                    style={{ borderRadius: 20 }}
                                    value={messageBudget}
                                    onValueChange={setMessageBudget}
                                    maximumValue={ValueBudget}
                                    minimumValue={0}
                                    step={10}
                                    minimumTrackTintColor="#7F3DFF"
                                    maximumTrackTintColor="#BEBEBE"
                                    allowTouchTrack
                                    trackStyle={{ height: 10, backgroundColor: '#7F3DFF', borderRadius: 20 }}
                                    thumbStyle={{ height: 30, width: 50, backgroundColor: '#7F3DFF' }}
                                    thumbProps={{
                                        children: (
                                            <CircleIconWithNumber />
                                        ),
                                    }}
                                />
                            </View>
                        </View>
                    }
                </View>
                <TouchableOpacity onPress={handleAdd} style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginVertical: 20, marginHorizontal: 50, backgroundColor: '#7F3DFF', borderRadius: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateBudget

const styles = StyleSheet.create({
    contentView: {
        width: 320,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20
    },
    circle: {
        width: 50,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#7F3DFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    number: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    },
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
