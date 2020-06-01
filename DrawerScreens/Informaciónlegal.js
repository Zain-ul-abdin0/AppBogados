import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
import HeaderBack from '../components/HeaderBack';

export class Informaciónlegal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {id:1, name: "Salario",   position:"CEO",               image:require('../logo.png')},
            {id:2, name: "Vacaciones",  position:"Creative designer",  image:require('../logo.png')} ,
            {id:3, name: "Décimo tercer mes", position:"Front-end dev",      image:require('../logo.png')},
            {id:4, name: "Prima de antiguedad", position:"Backend-end dev",   image:require('../logo.png')},
            {id:5, name: "Indemnización",   position:"Creative designer",  image:require('../logo.png')},
            {id:6, name: "Despido",   position:"Manager",           image:require('../logo.png')},
           ]
        };
      }
    render() {
        return (
            
            <View style={{flex:1,backgroundColor:'#0B1534'}}>
<HeaderBack title="Información legal"  navigation={this.props.navigation}  />
<View style={{justifyContent:'center'}}>


<View style={{backgroundColor:'#12204E',height:'90%',width:'90%',alignSelf:'center',borderRadius:10,}}>

<FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
            <View style={{}}>
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
             <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

             <Ionicons
 onPress={this.props.navigation.openDrawer}
 
  name="md-play" size={50} color="white" style={{paddingLeft:10}} />
                </View>
            
              </TouchableOpacity>
              <Text style={{color:'grey',fontWeight:'bold',alignSelf:'center',paddingTop:10,paddingBottom:10}}>{item.name}</Text>
</View>

            )
          }}/>

<View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:20}}>

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

export default Informaciónlegal


const styles = StyleSheet.create({
  
    welcome:{
        fontSize:25,
        fontWeight:'500',
        color:'#30B349',
        paddingTop:10
    },
    inputCarrier:{
       flex:1,justifyContent:'center',paddingLeft:10,flexDirection:'row',alignItems:'center'
    },

    login:{
        color:'#30B349',
        fontSize:18,
        paddingTop:10
    },
    inputBox:{
        bottom:10,
        height:50,width:315,backgroundColor:'white',borderRadius:5,
         shadowColor: '#000',
         alignSelf:'center',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5

    },
    forget:{
      color:'#30B349'
    },
    btn:{
      width:315,
      height:48,
      marginBottom:30,
      backgroundColor:'#30B349',
      borderRadius:20,
      shadowColor: '#30B349',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
    container:{
        flex:1,
        marginTop:20,
      },
      list: {
        paddingHorizontal: 10,
        marginTop:50,
        backgroundColor:"#12204E",
      },
      listContainer:{
       alignItems:'center'
      },
      /******** card **************/
      card:{
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    
        marginVertical: 1,
        backgroundColor:"#435CAF",
        
        borderRadius:20,
 width:120,
 height:100,
        marginHorizontal: 10,
      },
      cardFooter: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
      },
      cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
      },
      cardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      },
      userImage:{
        height: 50,
        width: 50,
         alignSelf:'center',
         resizeMode:'contain'
       },
      name:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#008080",
        fontWeight:'bold'
      },
      position:{
        fontSize:14,
        flex:1,
        alignSelf:'center',
        color:"#696969"
      },
      followButton: {
        marginTop:10,
        height:35,
        width:100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      followButtonText:{
        color: "#FFFFFF",
        fontSize:20,
      },
      icon:{
        height: 20,
        width: 20, 
      }
})