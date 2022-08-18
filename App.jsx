import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const saveValueFunction = () => {
    AsyncStorage.setItem('user', item);

    AsyncStorage.getItem('user').then(
      (value) =>
        setList([...list, value])
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Lista
        </Text>
        <View style={styles.flex}>
          <TextInput
            placeholder="Digite o item"
            value={item}
            onChangeText={(data) => setItem(data)}
            underlineColorAndroid="transparent"
            style={styles.textInputStyle}
          />
          <TouchableOpacity
            onPress={saveValueFunction}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}> Salvar </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex2}>
          <Text>            
            {list}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'purple',
    padding: 5,
    borderRadius: 10
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    width: '80%'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  flex2: {
    display: 'flex',
    flexDirection: 'column'
  }
});

export default App;
