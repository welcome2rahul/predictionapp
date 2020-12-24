import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, View  } from 'react-native';
import { Appbar ,TextInput , Button } from 'react-native-paper';
import Display from './Display';
// const Info = (props)=> {
//   return(
//     <View>
//       <Text>{props.name}</Text>
//       <Text>{props.role}</Text>
//     </View>
//   )
// }
// const[name,setName]=useState('Rahul');
// const[status,setStatus]=useState('Coder');

// useEffect ( ()=>{
//  fetch('https://jsonplaceholder.typicode.com/users')
//  .then(data=>data.json())
//  .then(data2=>{
//    setName(data2[0].name)
//    setStatus(data2[0].email)
//  })
// })

export default function App() {

  const [fname, setFname] = useState('');
  const [sname, setSname] = useState('');

  const sub = ()=>{
    fetch("https://love-calculator.p.rapidapi.com/getPercentage",{
      headers:{
        "x-rapidapi-key": "a06f6d8f5fmsh777718c069259ffp1d5711jsn2b7ea502d859",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com","useQueryString": true
      }
    }).then(data=>data.json())
      .then(data2=>{
        console.log(data2)
      })
    }


  return (
    <View style={styles.container}>
       <Appbar.Header>
      <Appbar.Content title="Love % Calculator"  />
     
    </Appbar.Header>
    <TextInput
      label="First Person"
      value={fname}
      onChangeText={text => setFname(text)}
    />
    <TextInput
      label="Second Person"
      value={sname}
      onChangeText={text => setSname(text)}
    />

<Button style={{margin:10}} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Calculate
  </Button>
  <Display/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});
