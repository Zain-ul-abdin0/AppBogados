import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,Alert,ScrollView,KeyboardAvoidingView,Image } from 'react-native'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient';
import Activity from '../Activity'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import HeaderBack from '../components/HeaderBack';

import Firebase from '../Firebase'

export class Services extends Component {

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
            <HeaderBack title="AppBogados" navigation={this.props.navigation}  />

{/* <Header title="Registrate" navigation={this.props.navigation}/> */}

<Text style={{color:'#B9B9B9',padding:20,alignSelf:"center"}}>Servicios legales</Text>


<View style={{justifyContent:'space-around',flex:1,alignItems:'center'}}>


<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center'}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Derecho administrativo</Text>
    <Image source ={require('../images2/administrativo.png')} style={{height:40,width:40}} />
</View>
 
</View>



<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Derecho Civil                </Text>
    <Image source ={require('../images2/civil.png')} style={{height:35,width:30}} />
</View>
 
</View>

 


<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Derecho laboral             </Text>
    <Image source ={require('../images2/LABORAL.png')} style={{height:35,width:30}} />
</View>
 
</View>





<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Registro de marca             </Text>
    <Image source ={require('../images2/marca.png')} style={{height:35,width:30}} />
</View>
 
</View>





<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Derecho de familia             </Text>
    <Image source ={require('../images2/family.png')} style={{height:35,width:30}} />
</View>
 
</View>




<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Derecho comercial             </Text>
    <Image source ={require('../images2/comercial.png')} style={{height:35,width:30}} />
</View>
 
</View>


<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Derecho penal             </Text>
    <Image source ={require('../images2/penal.png')} style={{height:35,width:30}} />
</View>
 
</View>



<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Derecho corporativo          </Text>
    <Image source ={require('../images2/corporativ.png')} style={{height:35,width:30}} />
</View>
 
</View>


<View style={{width:'90%',height:60,backgroundColor:'white',borderRadius:20,justifyContent:'center',marginTop:10}}>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Text>Migración                             </Text>
    <Image source ={require('../images2/migración.png')} style={{height:35,width:40}} />
</View>
 
</View>



 <Text style={{fontSize:15,color:'#435CAF',paddingTop:0,color:'red',paddingTop:20}}>¿Necesita un abogado?</Text>



          
</View>
              </KeyboardAwareScrollView>

         )
    }
}

export default Services
