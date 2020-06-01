import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header'
import MyTabs from '../Top'
import HeaderBack from '../components/HeaderBack'


export class CalculoDePrestaciones extends Component {
    render() {
        return (
            <View style={{flex:1}}>
<HeaderBack title="Calculo de prestaciones" navigation={this.props.navigation}  />
<MyTabs />
 
            </View>
        )
    }
}

export default CalculoDePrestaciones
