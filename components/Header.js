import React, { Component } from 'react'
import { Text, View, TextInput,Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export class Header extends Component {
    render() {
        return (
            <View>

<View style={{ height:80,width:'100%',backgroundColor:'#12204E',justifyContent:'center',}}>
<View style={{flexDirection:'row',marginTop:10}}>
<Ionicons
  onPress={()=>{this.props.navigation.openDrawer()}}
  name="md-menu" size={32} color="white" style={{paddingLeft:10}} />

 
<View style={{flex:1,alignItems:'center'}}>
<Text style={{fontWeight:'bold',color:'#B9B9B9',fontSize:20}}>{this.props.title}</Text>
</View>
</View>

</View>


            </View>
        )
    }
}

export default Header
