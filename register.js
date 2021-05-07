import {View, Text, Image,TextInput,Button, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';
import React, { Component } from 'react';
import { button } from './styles';
import {fields} from './styles';
import menu from './menu';
class register extends Component{
    constructor(props){
        super(props)
        this.state={
            elevation:1
        }
    }
    onClick = () => {
        
        console.log("hi")
       //this.props.navigation.navigate('menu')
   };
   onFocus=()=>{
    this.setState({elevation:10});
    }
    onBlur=()=>{
        this.setState({elevation:1});
    }
    render(){
        return(
            // <ScrollView>
            <View style={{backgroundColor:'#fff',flex:1}}>
                <Image source={require("../src/assets/orangefluid.png")} 
                style={{height:100,width:90,marginLeft:266}}
                />
                <Text style={{marginTop:30,fontSize:30,marginLeft:20,fontWeight:'bold'}}>
                    Create Account
                </Text>

                <View style={{flexDirection:'row',marginLeft:20,marginTop:30,borderRadius:10,width:'89%',backgroundColor:'white',elevation:this.state.elevation}}>
                <Image source={require("../src/assets/personavtar.png")} 
                style={{height:17,width:17,marginTop:16,marginLeft:15}}
                /> 
                <TextInput style={{width:'100%'}}
                placeholder='FULL NAME'>
                {/* onFocus={this.onFocus}
                onBlur={this.onBlur}> */}
                </TextInput>
                </View>

                <View style={{flexDirection:'row',marginLeft:20,marginTop:30,borderRadius:10,width:'89%',backgroundColor:'white',elevation:this.state.elevation}}>
                <Image source={require("../src/assets/emailicon.png")} 
                style={{height:17,width:17,marginTop:16,marginLeft:15}}
                /> 
                <TextInput style={{width:'100%'}}
                placeholder='EMAIL'>
                {/* onFocus={this.onFocus}
                onBlur={this.onBlur}> */}
                </TextInput>
                </View>

                <View style={{flexDirection:'row',marginLeft:20,marginTop:30,borderRadius:10,width:'89%',backgroundColor:'white',elevation:this.state.elevation}}>  
                <Image source={require("../src/assets/lockicon.png")} 
                style={{height:15,width:15,marginTop:18,marginLeft:15}}
                /> 
                <TextInput style={{width:'70%',marginTop:2}}
                placeholder='PASSWORD'>
                {/* onFocus={this.onFocus}
                onBlur={this.onBlur}> */}
                    </TextInput>
                    </View>

                <View style={{flexDirection:'row',marginLeft:20,marginTop:30,borderRadius:10,width:'89%',backgroundColor:'white',elevation:this.state.elevation}}>  
                <Image source={require("../src/assets/lockicon.png")} 
                style={{height:15,width:15,marginTop:18,marginLeft:15}}
                /> 
                <TextInput style={{width:'70%',marginTop:2}}
                placeholder='CONFIRM PASSWORD'>
                {/* onFocus={this.onFocus}
                onBlur={this.onBlur}> */}
                    </TextInput>
                    </View>

                <View style={button.parent}>
                <Text style={{color:'white',marginTop:10,marginLeft:34,fontWeight:'bold',fontSize:16}}
                onPress={this.onClick}>
                SIGN UP  →
                </Text>
                </View>
                <Text style={{color:'gray',marginLeft:80,marginTop:40}}>
                    Already have an account?
                </Text>
               <Text style={{color:'orange',marginLeft:224,marginTop:-18,fontWeight:'bold'}}
               onPress={this.onFocus}>
                   Sign in
               </Text>

            </View>
            //</ScrollView>
        )
    }
}
export default register;