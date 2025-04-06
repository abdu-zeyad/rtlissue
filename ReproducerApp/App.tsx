import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  I18nManager,
  Alert,
  TouchableOpacity,
} from 'react-native';
export default function App() {
  const flipRTL = async () => {
    const isRTL = I18nManager.isRTL;
    try {
      I18nManager.forceRTL(!isRTL);
      Alert.alert('Direction Changed', 'Reloading the app...');
    } catch (e) {
      console.log('Error flipping RTL:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Flip RTL" onPress={flipRTL} />
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          marginVertical: 20,
        }}>{`app is ${I18nManager.isRTL ? 'rtl' : 'rtl'}`}</Text>
      <ScrollView style={styles.scrollView} horizontal>
        {Array.from({length: 10}).map((_, index) => (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(`${index}`);
            }}
            key={index}>
            <Text style={styles.item}>Item {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginTop: 20,
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
