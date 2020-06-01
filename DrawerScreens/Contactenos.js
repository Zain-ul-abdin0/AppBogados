import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import Header from '../components/Header'
import HeaderBack from '../components/HeaderBack'


export class Contactenos extends Component {
    render() {
        return (
            
            <View style={{flex:1,backgroundColor:'#0B1534'}}>
<HeaderBack title="Servicios Legales" navigation={this.props.navigation}   />

<View style={{justifyContent:'center',}}>
<View style={{justifyContent:'space-around', backgroundColor:'#12204E',height:'85%',width:'90%',alignSelf:'center',borderRadius:10,alignItems:'center'}}>

<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9'}}>Contacto</Text>

<View style={{flexDirection:'row',marginTop:30,width:'100%',justifyContent:'space-around'}}>
<Image source={require('../images/call.png')} style={{height:40,width:40,}} />
<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9',}}>507-333-3333</Text>
</View>


<View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
<Image source={require('../images/message.png')} style={{height:30,width:50}} />
<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9'}}>Info@frris.com</Text>
</View>



<View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
<Image source={require('../images/whatsapp.png')} style={{height:50,width:50}} />
<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9'}}>507-6666-6666</Text>
</View>
 
 <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
<Image source={require('../images/in.png')} style={{height:50,width:50}} />
<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9'}}>@johelanibal</Text>
</View>


<View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
<Image source={require('../images/insta.png')} style={{height:50,width:50}} />
<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9'}}>@johelanibal</Text>
</View>

</View>
</View>
</View>
        )
    }
}

export default Contactenos
