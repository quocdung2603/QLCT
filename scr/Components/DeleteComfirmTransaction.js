import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput } from 'react-native';
import { useData } from '../../DataContext';

const DeleteComfirmTransaction = ({ isVisible, onClose, onConfirm }) => {
    const {deletehTransaction}=useData();
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleConfirm = () => {
    onConfirm(confirmationCode);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text>Enter Confirmation Code:</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, marginTop: 10 }}
            onChangeText={text => setConfirmationCode(text)}
            value={confirmationCode}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteComfirmTransaction;
