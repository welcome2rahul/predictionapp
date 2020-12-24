import React ,{useState} from 'react';
import { StyleSheet, View ,Text } from 'react-native';

const Display = (prop)=>{

    if (prop.data=="Loading"){
        return <Text>Calculating</Text>
        
    }else{
        return(
         
            <View style={styles.container} >
                <View style={styles.main}>
                <Text style={styles.text}>{prop.data.percentage}</Text>
                <Text style={styles.text}>{prop.data.result}</Text>
                </View>
            </View>
            )
    }
    }

export default Display;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      
    },
    text: {
        
        textAlign: 'center',
        fontSize : 20,
    },
    main : {
        borderWidth : 1,
        borderRadius : 5,
    }
  });
  