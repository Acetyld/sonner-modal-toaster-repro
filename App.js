import React, { useState } from 'react';
import { Button, Modal, View } from 'react-native';
import { Toaster, toast } from 'sonner-native';

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Toaster position="top-center" />
      <Button title="Show toast" onPress={() => toast('Saved')} />
      <Button title="Open modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
          <Button title="Show toast in modal" onPress={() => toast('Saved in modal')} />
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
