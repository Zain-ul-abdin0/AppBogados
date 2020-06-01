import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView,View,Text,TextInput } from 'react-native';
import Constants from 'expo-constants';
import RadioButton from 'react-native-radio-button'

export class LiquidacionTop extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      

<View style={{flexDirection:'row',marginTop:10}} >
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Nombre:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>

</View>




<View style={{flexDirection:'row',marginTop:10}} >
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Edad:</Text>

<View style={{width:'30%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Cargo:</Text>

<View style={{width:'30%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>


</View>

<View style={{flexDirection:'row',marginTop:10}} >
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Genero:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>

</View>




<View style={{flexDirection:'row',marginTop:10}} >
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Nombre de la empresa:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>

</View>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Es usted
</Text>


<View style={{flexDirection:'flex-start',flexDirection:'row',justifyContent:'space-evenly'}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Trabajador
</Text>

<RadioButton
  animation={'bounceIn'}
  isSelected={true}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Empleador
</Text>
</View>

<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Tipo de terminación:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>
</View>

 
<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Salario a la fecha:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>
</View>





<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Vacaciones:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>
</View>

<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Décimo tercer mes:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>
</View>

<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Prima de antigüedad:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>
</View>

<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Indemnización:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>
</View>

<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Preaviso:</Text>

<View style={{width:'50%',height:40,backgroundColor:'white',borderRadius:50,justifyContent:'center'}}>
<TextInput style={{marginLeft:10,color:'black'}}  placeholderTextColor="black" />
</View>
</View>






<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Total:</Text>



<View style={{height:40,width:'50%',backgroundColor:'#E3E6F0',borderRadius:40,alignSelf:'center',marginTop:10}}>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontWeight:'bold',fontSize:20}} >Calcular</Text>
</View>
</View>

</View>

<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>

<Text style={{color:'red'}}>¿Necesita un abogado?</Text>

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
<View style={{marginTop:20}}></View>
 
      </ScrollView>
    </SafeAreaView>
        )
    }
}

export default LiquidacionTop


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
  