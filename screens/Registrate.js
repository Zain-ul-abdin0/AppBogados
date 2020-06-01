import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,Alert,ScrollView,KeyboardAvoidingView } from 'react-native'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient';
import Activity from '../Activity'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Firebase from '../Firebase'

export class Registrate extends Component {

    constructor(props){
        super(props);
        this.state=({
          email:'',
          password:'',
          isLoading:0
        })
      }

      signUp=(email,password) =>{
        this.setState({isLoading:1})      
  console.log(this.state.email,this.state.password)
         Firebase.auth().createUserWithEmailAndPassword(email, password).then(this.onSuccess.bind(this)).catch(this.onFailure.bind(this))
    
  }
  onFailure=()=>{
    Alert.alert("You have entered unacceptable email or password")
    this.setState({isLoading:0})      
  
  }
  onSuccess=()=>{
    alert('Your Account has been created');
    this.setState({isLoading:0})      
  
  }  


  onButton=()=>{
    if(this.state.isLoading==1){
     return (
       <Activity/>
     );
    }
     else{
      return(
        <TouchableOpacity
        onPress={()=>this.signUp(this.state.email,this.state.password)}
 
  style={{height:71,width:'85%',backgroundColor:'#E3E6F0',borderRadius:40,marginBottom:40,marginTop:10}}>
 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <Text style={{fontWeight:'bold',fontSize:20}} >Continuar</Text>
 </View>
 </TouchableOpacity>
      );
     }
    }

    

    render() {
        return (
       

         
            <KeyboardAwareScrollView
             style={{flex:6,backgroundColor:'#0B1534'}}>
            
{/* <Header title="Registrate" navigation={this.props.navigation}/> */}

<Text style={{color:'#B9B9B9',padding:20}}>Introduce tu información personal</Text>


<View style={{justifyContent:'space-around',flex:1,alignItems:'center'}}>


<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center'}}>


<TextInput style={{marginLeft:10}}
            onChangeText={(email)=>this.setState({email})}

 placeholder="Correo electronico"/>
</View>



<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>

<TextInput style={{marginLeft:10}} placeholder="Confirmar correo"/>
</View>



<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<TextInput style={{marginLeft:10}} placeholder="Nombre de Usuario"/>
</View>

<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<TextInput style={{marginLeft:10}}
            onChangeText={(password)=>this.setState({password})}
secureTextEntry={true}
 placeholder="Contraseña"/>
</View>

<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<TextInput style={{marginLeft:10}} secureTextEntry={true} placeholder="Confirmar contraseña"/>
</View>



<Text style={{fontSize:15,color:'#B9B9B9',paddingTop:10}}>Al crear una cuenta, acepte los</Text>
<Text style={{fontSize:15,color:'#435CAF',paddingTop:0}}>términos y condiciones</Text>


{this.onButton()}

          
</View>
              </KeyboardAwareScrollView>

         )
    }
}

export default Registrate
