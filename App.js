import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import DropDownPicker from './src/DropDownPicker';

const SIMPLE_DATA = [
  'I think it might !',
  "I'm not sure about it.",
  'I will never do that !',
];

const OBJECT_DATA = [
  {id: 1, value: 'I think it might !'},
  {id: 2, value: "I'm not sure about it."},
  {id: 3, value: 'I will never do that !'},
];

const DATA_TYPES = [
  SIMPLE_DATA,
  OBJECT_DATA,
];

const App = () => {
  const [value, setValue] = useState('');
  const [dataIndex, setDataIndex] = useState(0);
  const [data, setData] = useState(DATA_TYPES[dataIndex]);

  function changeDataType() {
    if (dataIndex === DATA_TYPES.length - 1) {
      setDataIndex(0);
    } else {
      setDataIndex(dataIndex + 1);
    }
    setData(DATA_TYPES[dataIndex]);
    reset();
  }

  function reset() {
    setValue('');
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>Will you go on a date with me ?</Text>
      <Text>Answer : {JSON.stringify(value)}</Text>
      <DropDownPicker
        result={value}
        setResult={setValue}
        data={data}
        placeholder={'Choose an option'}
      />
      <Button onPress={reset} title="Reset" />
      <Button onPress={changeDataType} title="Change type of data" />
      <Text style={{marginTop: 100}}>Data: {JSON.stringify(data)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
