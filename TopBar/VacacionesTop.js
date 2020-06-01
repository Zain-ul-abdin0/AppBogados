import React, { Component } from 'react'
import { Text, View,TextInput ,TouchableOpacity,ScrollView,StyleSheet,SafeAreaView} from 'react-native'
import RadioButton from 'react-native-radio-button'

import Firebase from '../Firebase'
export class VacacionesTop extends Component {
    constructor (props){
        super(props)
          this.state = {
                value: 0,
                Cuanto:'',
                salarios:''
            }
        
    }
    doSomething(title){
        alert('Pressed')
    }
     
     submit(){
         
        Firebase.database().ref('/Vacaciones').push({
            Cuanto:this.state.Cuanto,
            salarios:this.state.salarios,
         
          });
 s
     }
    handleOnPress(value){
        this.setState({value:value})
    }
    render() {
        return (

            
            <SafeAreaView style={styles.container}>
      
            <View style={{backgroundColor:'#0B1534',flex:1,justifyContent:'center',}}>
 
 <View style={{height:'100%',width:"95%",backgroundColor:'#12204E',alignSelf:"center",marginTop:10,borderRadius:30,}}>

 
<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
¿Su salario es fijo?
</Text>

<View style={{flexDirection:'row',marginLeft:10}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}

  onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Si   -  ¿Cuanto?
</Text>


<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>
</View>



<View style={{flexDirection:'row',marginLeft:10}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={true}
  size={10}

  onPress={() => console.log('hello')}
/>

<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
No
</Text>

</View>
 







 <Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>Ingresa tus salarios de los últimos once meses
antes de las vacaciones</Text>

<View style={{width:'80%'}}>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>

<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>


<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>
<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>

<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>
</View>
</View>


<View style={{marginTop:10}}>

</View>

<View style={{width:'80%'}}>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>

<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>


<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>
<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>

<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>
</View>
</View>











<View style={{marginTop:10}}>

</View>



<View style={{width:'80%',marginLeft:10}}>
<View style={{flexDirection:'row',justifyContent:'flex-start'}}>

<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>


<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center',marginLeft:20}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>
<View style={{width:'20%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center',marginLeft:20}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="" />
</View>


</View>
</View>









 <Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
¿Tuviste incremento de salarios?
</Text>

<View style={{flexDirection:'row',marginLeft:10}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}

  onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Si   -  ¿Cuanto?
</Text>


<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}} 
onChangeText={(Cuanto)=>{this.setState({Cuanto})}}
 
 placeholderTextColor="black" placeholder="|" />
</View>
</View>




<View style={{flexDirection:'row',marginLeft:10}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={true}
  size={10}

  onPress={() => console.log('hello')}
/>

<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
No
</Text>

</View>
























 

<TouchableOpacity
onPress={()=>this.submit()}
 style={{height:50,width:'85%',backgroundColor:'#E3E6F0',borderRadius:40,alignSelf:'center',marginTop:10}}>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontWeight:'bold',fontSize:20}} >Calcular</Text>
</View>
</TouchableOpacity>


<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
Vacaciones
</Text>

<View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
Mensual:
</Text>

<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold',}}>
$..     1000.00
</Text>



</View>


<View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
Quincenal:
</Text>

<Text style={{fontWeight:'bold', color:'#B9B9B9',padding:10}}>
$..     5000.00
</Text>
</View>     

<View style={{flexDirection:"row",justifyContent:'flex-end',marginRight:20}}>
<View style={{
     width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
}}>
 <Text style={{color:'white',fontWeight:'bold'}}>!dsafadsf</Text>
 </View>
</View>
 </View>
             </View>
         </SafeAreaView>
        )
    }
}

export default VacacionesTop


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor:'#0B1534'
    },
    scrollView: {
      backgroundColor: '#12204E',
      marginHorizontal: 15,
      borderRadius:20
    },
    text: {
      fontSize: 42,
    },
  });
  