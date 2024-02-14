import React from "react";
function Header() {
    return ( 
        <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => Alert.alert("haha")}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <AntDesign name='down' size={30} color='black' />
                    <View style={{ borderColor: 'grey', borderWidth: 1 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>October</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
     );
}

export default Header;