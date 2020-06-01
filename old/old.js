import React, { Component } from 'react'
import { Text, View,TextInput ,TouchableOpacity} from 'react-native'
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
            <View style={{backgroundColor:'#0B1534',flex:1,justifyContent:'center',}}>
 
 <View style={{height:'95%',width:"95%",backgroundColor:'#12204E',alignSelf:"center",marginTop:10,borderRadius:30,}}>

<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>Suma los salarios de los últimos 11 meses.</Text>



<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
Puedes obtener esta información de tu
ficha del seguro social, talonario de pago
o recordando tus últimos salarios.
</Text>   

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

<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
Suma el total de salarios:
</Text>

<View style={{height:50,width:'85%',backgroundColor:'#E3E6F0',borderRadius:40,alignSelf:'center'}}>
<View style={{flex:1,justifyContent:'center'}}>
    <TextInput 
    onChangeText={(salarios)=>{this.setState({salarios})}}

    style={{fontWeight:'bold',fontSize:20,paddingLeft:10,fontWeight:'bold'}} placeholder="|" placeholderTextColor="black" ></TextInput>
</View>
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
        )
    }
}

export default VacacionesTop








import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
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
s
}
    render() {
        return (
            <View style={{backgroundColor:'#0B1534',flex:1,justifyContent:'center'}}>
 <View style={{width:"90%",height:'98%',backgroundColor:'#12204E',alignSelf:'center',borderRadius:20,paddingLeft:20}}>
<Text style={{color:'red',paddingTop:5,alignSelf:'center'}}>Solo para empresas privadas</Text>

<View style={{flexDirection:'row'}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Primera {"\n"}
partida
</Text>

<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Segunda
{"\n"}
partida

</Text>



<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>

<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Tercera
{"\n"}
partida


</Text>




</View>

<View style={{alignSelf:'flex-start',flexDirection:'row'}}>
<RadioButton
  animation={'bounceIn'}
  isSelected={false}
  size={10}
   onPress={() => console.log('hello')}
/>
<Text style={{fontWeight:'bold',color:'#B9B9B9',padding:10}}>
Es dependiente su pareja
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


<View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
<Text style={{color:'#B9B9B9',padding:10,fontWeight:'bold'}}>
XIII Mes aprox
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
        )
    }
}

export default DecimoTop





