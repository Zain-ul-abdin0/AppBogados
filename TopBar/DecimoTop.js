import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView,View,Text,TextInput ,TouchableOpacity} from 'react-native';
import RadioButton from 'react-native-radio-button'

import Firebase from '../Firebase'
export class DecimoTop extends Component {
  constructor (props){
    super(props)
      this.state = {
            value: 0,
            Susalariobrutoesde:'',
            Segundaquincenadediciembre:'',
            Enero:'',
            Febrero:'',
            Marzo:'',
            PrimeraquincenadeAbril:''
        }
    
}


submit(){
         
  Firebase.database().ref('/Décimo').push({
    Susalariobrutoesde:this.state.Susalariobrutoesde,
    Segundaquincenadediciembre:this.state.Segundaquincenadediciembre,

    Enero:this.state.Enero,

    Febrero:this.state.Febrero,

    Marzo:this.state.Marzo,

    PrimeraquincenadeAbril:this.state.PrimeraquincenadeAbril,

   
    });

}
    render() {
        return (
          
          <SafeAreaView style={styles.container}>
          
            <View style={{backgroundColor:'#0B1534',flex:1,justifyContent:'center'}}>
 <View style={{width:"95%",height:'98%',backgroundColor:'#12204E',alignSelf:'center',borderRadius:20,paddingLeft:20}}>
<Text style={{color:'red',paddingTop:5,alignSelf:'center'}}>Solo para empresas privadas</Text>

<View style={{flexDirection:'row'}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
15 de {"\n"}
Diciembre
</Text>

<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
15 de
{"\n"}
Abril

</Text>



<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
15 de
{"\n"}
Agosto


</Text>




</View>

 



<Text style={{color:'#B9B9B9',fontWeight:'bold',}}>
Su salario bruto es de:
</Text>


<View style={{height:40,width:'80%',backgroundColor:'#E3E6F0',borderRadius:40}}>
<View style={{flex:1,justifyContent:'center'}}>
    <TextInput 
    onChangeText={(Susalariobrutoesde)=>{this.setState({Susalariobrutoesde})}}

    style={{fontWeight:'bold',fontSize:16,paddingLeft:10}} placeholder="|" placeholderTextColor="black"  ></TextInput>
</View>
</View>



<Text style={{color:'#B9B9B9',fontWeight:'bold',}}>
Segunda quincena de diciembre:
</Text>


<View style={{height:40,width:'80%',backgroundColor:'#E3E6F0',borderRadius:40}}>
<View style={{flex:1,justifyContent:'center'}}>
<TextInput 
onChangeText={(Segundaquincenadediciembre)=>{this.setState({Segundaquincenadediciembre})}}

style={{fontWeight:'bold',fontSize:16,paddingLeft:10}} placeholder="|" placeholderTextColor="black"  ></TextInput>
</View>
</View>


<Text style={{color:'#B9B9B9',fontWeight:'bold',}}>
Enero:
</Text>


<View style={{height:40,width:'80%',backgroundColor:'#E3E6F0',borderRadius:40}}>
<View style={{flex:1,justifyContent:'center'}}>
<TextInput

onChangeText={(Enero)=>{this.setState({Enero})}}

 style={{fontWeight:'bold',fontSize:16,paddingLeft:10}} placeholder="|" placeholderTextColor="black"  ></TextInput>
</View>
</View>

<Text style={{color:'#B9B9B9',fontWeight:'bold',}}>
Febrero:
</Text>


<View style={{height:40,width:'80%',backgroundColor:'#E3E6F0',borderRadius:40}}>
<View style={{flex:1,justifyContent:'center'}}>
<TextInput
onChangeText={(Febrero)=>{this.setState({Febrero})}}

 style={{fontWeight:'bold',fontSize:16,paddingLeft:10}} placeholder="|" placeholderTextColor="black"  ></TextInput>
</View>
</View>

<Text style={{color:'#B9B9B9',fontWeight:'bold',}}>
Marzo:
</Text>


<View style={{height:40,width:'80%',backgroundColor:'#E3E6F0',borderRadius:40}}>
<View style={{flex:1,justifyContent:'center'}}>
<TextInput
onChangeText={(Marzo)=>{this.setState({Marzo})}}

 style={{fontWeight:'bold',fontSize:16,paddingLeft:10}} placeholder="|" placeholderTextColor="black"  ></TextInput>
</View>
</View>

<Text style={{color:'#B9B9B9',fontWeight:'bold',}}>
Primera quincena de Abril
</Text>


<View style={{height:40,width:'80%',backgroundColor:'#E3E6F0',borderRadius:40}}>
<View style={{flex:1,justifyContent:'center'}}>
<TextInput 
onChangeText={(PrimeraquincenadeAbril)=>{this.setState({PrimeraquincenadeAbril})}}

style={{fontWeight:'bold',fontSize:16,paddingLeft:10}} placeholder="|" placeholderTextColor="black"  ></TextInput>
</View>
</View>



<TouchableOpacity
onPress={()=>this.submit()}
 style={{height:40,width:'85%',backgroundColor:'#E3E6F0',borderRadius:40,alignSelf:'center',marginTop:10,alignSelf:'center'}}>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontWeight:'bold',fontSize:20}} >Calcular</Text>
</View>
</TouchableOpacity>

<View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>

<View style={{flexDirection:'column'}}>
<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
Decimo tercer mes
</Text>





<Text style={{color:'#B9B9B9',paddingLeft:10,fontWeight:'bold'}}>
Su decimo del 15 de Agosto debe ser de:</Text>


<Text style={{fontWeight:'bold', color:'#B9B9B9',padding:10}}>
$..     5000.00
</Text>


</View>

</View>
<View style={{flexDirection:"row",justifyContent:'space-around',marginBottom:10}}>

<Text style={{color:'#B9B9B9',paddingLeft:10,fontWeight:'bold',color:'red'}}>
¿Necesita un abogado?</Text>

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

export default DecimoTop


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

