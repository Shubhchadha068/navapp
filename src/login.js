import {View, Text, Image,TextInput,Button, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';
import React, { Component } from 'react';
import { button } from './styles';
import {fields} from './styles';
import {register} from './register';
import {restuarant} from './restuarants';
import menu from './menu';
//import {useNavigation} from '@react-navigation/native';
//const navigation=useNavigation();
class login extends Component{
    
    constructor(){
        super()
        this.state={
            elevation:1
        }
    }
    //navigation=useNavigation();
    onClick = () => {
        
         //console.log("hi")
          this.props.navigation.navigate('register');
        
    };
    onClick1 = () => {
        
        //console.log("hye")
        this.props.navigation.navigate('restaurant');
       
   };
    onFocus=()=>{
        this.setState({elevation:10});
    }
    onBlur=()=>{
        this.setState({elevation:1});
    }
    render(){
        return(
            <ScrollView>
            <View style={{backgroundColor:'#fff'}}>
                 <Image source={require("../src/assets/orangefluid.png")} 
                style={{height:160,width:130,marginLeft:240}}
                />
                <Text style={{marginTop:50,fontSize:30,marginLeft:20,fontWeight:'bold'}}>
                    Login
                </Text>
                <Text style={{marginTop:5,fontSize:15,marginLeft:20,color:'gray'}}>
                    Please sign in to continue.
                </Text>

                
                <View style={[{flexDirection:'row',marginLeft:20,marginTop:30,borderRadius:10,width:'89%',backgroundColor:'white',elevation:this.state.elevation},
                {elevation:this.state.elevation}]}>
                <Image source={require("../src/assets/emailicon.png")} 
                style={{height:17,width:17,marginTop:16,marginLeft:15}}
                /> 
                <TextInput style={{width:'100%'}}
                placeholder='EMAIL'
                onFocus={this.onFocus}
                onBlur={this.onBlur}>
                </TextInput>
                </View>

                <View style={[{flexDirection:'row',marginLeft:20,marginTop:30,borderRadius:10,width:'89%',backgroundColor:'white'},
                {elevation:this.state.elevation}]}>  
                <Image source={require("../src/assets/lockicon.png")} 
                style={{height:15,width:15,marginTop:18,marginLeft:15}}
                /> 
                <TextInput style={{width:'70%',marginTop:2}}
                placeholder='PASSWORD'
                onFocus={this.onFocus}
                onBlur={this.onBlur}>
                    </TextInput>
                    <Text style={{marginTop:16,color:'orange',fontWeight:'bold'}}>
                        FORGOT
                    </Text>
                    </View>
                <View style={button.parent}>
                <Text style={{color:'white',marginTop:10,marginLeft:34,fontWeight:'bold',fontSize:16}}
                onPress={this.onClick1}>
                LOGIN  →
                </Text>
                </View>
                <Text style={{color:'gray',marginLeft:80,marginTop:80}}>
                    Don't have an account?
                </Text>
               <Text style={{color:'orange',marginLeft:215,marginTop:-18,fontWeight:'bold'}}
               onPress={this.onClick}>
                   Sign up
               </Text>
                
                
            </View>
            </ScrollView>
        )
    }
}
export default login;