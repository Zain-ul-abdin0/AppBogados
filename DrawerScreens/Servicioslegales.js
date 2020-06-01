import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
import HeaderBack from '../components/HeaderBack';

export class Servicioslegales extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#0B1534'}}>
<HeaderBack title="Servicios Legales" navigation={this.props.navigation}  />

<View style={{justifyContent:'center',}}>
<View style={{backgroundColor:'#12204E',height:'85%',width:'90%',alignSelf:'center',borderRadius:10,alignItems:'center'}}>

<View style={{width:200,height:150,backgroundColor:'#435CAF',borderRadius:20,marginTop:20}}>
<View style={{justifyContent:'center',alignItems:'center',flex:1}}>

<Ionicons
 onPress={this.props.navigation.openDrawer}
 
  name="md-person" size={80} color="white"  />
</View>
</View>

<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9'}}>Esfera laboral</Text>

<View style={{width:200,height:150,backgroundColor:'#435CAF',borderRadius:20,marginTop:20}}>
<View style={{justifyContent:'center',alignItems:'center',flex:1}}>

<Ionicons
 onPress={this.props.navigation.openDrawer}
 
  name="md-person" size={80} color="white"  />
</View>
</View>
<Text style={{fontSize:18, paddingTop:10, color:'#B9B9B9'}}>Esfera civil</Text>

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


</View>





</View>

            </View>
        )
    }
}

export default Servicioslegales
