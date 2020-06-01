import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity} from 'react-native'
import Header from '../components/Header'

export class SideBarScreen extends Component {
    
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#12204E'}}>
            <Header title="AppBogados" navigation={this.props.navigation}  />
 

            <View style={{flex:1,alignItems:'center'}}>
            <Image source={require('../logo.png')}  style={{height:200,width:200,}}/>
<TouchableOpacity style={{width:'95%',height:60,backgroundColor:'white',borderRadius:20,marginTop:20

}}

onPress={()=>this.props.navigation.navigate('CalculoDePrestaciones')}
>
<View style={{justifyContent:'center',flex:1 }}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:"center",flex:1}}>
<Text>Calculo de prestaciones</Text>
<Image source ={require('../images/Calculadora.png')} style={{width:40,height:40, }}/>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity 
onPress={()=>this.props.navigation.navigate('Informaciónlegal')}

style={{width:'95%',height:60,backgroundColor:'white',borderRadius:20,marginTop:20}}>
<View style={{justifyContent:'center',flex:1 }}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:"center",flex:1}}>
<Text>Información legal             </Text>
<Image source ={require('../images/Informaciónlegal.png')} style={{width:40,height:40, }}/>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity 
onPress={()=>this.props.navigation.navigate('Servicioslegales')}

style={{width:'95%',height:60,backgroundColor:'white',borderRadius:20,marginTop:20}}>
<View style={{justifyContent:'center',flex:1, }}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:"center",flex:1}}>
<Text>Servicios legales              </Text>
<Image source ={require('../images/Servicioslegales.png')} style={{width:40,height:40 }}/>
</View>
</View>
</TouchableOpacity>



<TouchableOpacity

onPress={()=>this.props.navigation.navigate('Contactenos')}
 style={{width:'95%',height:60,backgroundColor:'white',borderRadius:20,marginTop:20}}>
<View style={{justifyContent:'center',flex:1, }}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:"center",flex:1}}>
<Text>Contáctenos                   </Text>
<Image source ={require('../images/contactenos.png')} style={{width:40,height:40 }}/>
</View>
</View>
</TouchableOpacity>
</View>

            </View>
        )
    }
}

export default SideBarScreen
