import { StatusBar } from 'expo-status-bar';
import React ,{useEffect, useState} from 'react';
import { StyleSheet, Text, View , Button ,TextInput } from 'react-native';



// const Info = (props)=> {
//   return(
//     <View>
//       <Text>{props.name}</Text>
//       <Text>{props.role}</Text>
//     </View>
//   )
// }


export default function App() {

  const[name,setName]=useState('Rahul');
  const[status,setStatus]=useState('Coder');

 useEffect ( ()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(data=>data.json())
   .then(data2=>{
     setName(data2[0].name)
     setStatus(data2[0].email)
   })
 })
  return (
    <View style={styles.container}>
     <Text>{name}</Text>
     <TextInput style={{height:40}} placeholder="Type Here " onChangeText={(name)=> setName(name) } />
     <Text>{status}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
