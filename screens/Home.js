import React, { Component } from 'react'
import { Text, View,TextInput,Image,TouchableOpacity ,SafeAreaView,Alert} from 'react-native'
import Firebase from '../Firebase'
import { LinearGradient } from 'expo-linear-gradient';
import Activity from '../Activity'
export class Home extends Component {
    constructor(props){
        super (props);
        this.state={
            email:'',
            password:'',
        }
    }

    
    logIn=(email,password) =>{
        this.setState({isLoading:1})      
  
         Firebase.auth().signInWithEmailAndPassword(email, password).then(this.onSuccess.bind(this)).catch(this.onFailure.bind(this))
    
  }
  onFailure=()=>{
    Alert.alert("You have entered wrong password or email")
    this.setState({isLoading:0})      
  
  }
  
  onSuccess=()=>{
    this.props.navigation.navigate('Drawer')        
    this.setState({isLoading:0})      
  
  }
  
  


  onButton=()=>{
    if(this.state.isLoading==1){
      return(
          <Activity/>
          
      );
    }
    else{
      return(
        <TouchableOpacity style={{height:40,width:'90%',backgroundColor:'#E3E6F0',borderRadius:10,marginTop:30}}

        onPress={()=>{this.logIn(this.state.email,this.state.password)}}
        
        >
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:20}} >INICIAR SESIÓN</Text>
        </View>
        </TouchableOpacity>
      );
      }
    }
  
  
  render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#0B1534'}}>
            <View style={{flex:1,alignItems:'center',marginTop:40,backgroundColor:'#0B1534'}}>
<View style={{height:'40%',width:'60%',backgroundColor:'#12204E',borderRadius:40}}>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Image source={require('../logo.png')}  style={{height:200,width:200,}}/>
</View>
</View>
<Text style={{fontWeight:'bold',color:'#B9B9B9',fontSize:20,marginTop:10}}>iniciar sesión</Text>

<View style={{height:'50%',width:"90%",backgroundColor:'#12204E',borderRadius:40,marginTop:10}}>
<View style={{flexDirection:'column',justifyContent:"space-around",alignItems:'center',marginTop:20}}>


<View style={{width:'90%',height:40,backgroundColor:'white',borderRadius:10,justifyContent:'center'}}>
<TextInput style={{marginLeft:10}} placeholder="Correo electronico"

onChangeText={(email)=>this.setState({email})}
/>
</View>


<View style={{width:'90%',height:40,backgroundColor:'white',borderRadius:10,justifyContent:'center',marginTop:10}}>
<TextInput style={{marginLeft:10}} placeholder="Contraseña"
secureTextEntry={true}
onChangeText={(password)=>this.setState({password})}

/>
</View>


</View>

<View style={{alignItems:'center',}}>

{this.onButton()}


<TouchableOpacity
onPress={()=>{
this.props.navigation.navigate ('Registrate')
}}
>
<Text style={{fontWeight:'bold',fontSize:20,color:'white',}}>Crear una cuenta</Text>
</TouchableOpacity>
<Text style={{fontSize:15,color:'#B9B9B9',paddingTop:30}}>Al crear una cuenta, acepte los</Text>
<Text style={{fontSize:15,color:'#435CAF'}}>términos y condiciones</Text>

</View>
</View>
            </View>
            </SafeAreaView>
        )
    }
}

export default Home
