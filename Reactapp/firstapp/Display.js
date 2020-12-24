import React ,{useState} from 'react';
import { StyleSheet, View ,Text } from 'react-native';

const Display = ()=>{
    return(
    <View style={styles.container} >
        <Text>Percent</Text>
        <Text>Result</Text>

    </View>
    )}

export default Display;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      
    },
  });
  