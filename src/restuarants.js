import {View, Text, Image,TextInput,Button, TouchableOpacity, TouchableHighlight,ScrollView} from 'react-native';
import React, { Component } from 'react';
import { header,topicons,toptext,restaurantflex,restaurantimages,restaurantname,restaurant,status,distance,rate,unrate,round} from './styles';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
export class restuarant extends Component{
    render(){
        return(
            <ScrollView>
            <View >
                <View style={header.parent}>
                <Image source={require("../src/assets/drawericon.png")} 
                style={{height:30,width:30,marginTop:3}}
                />
                <Text style={{marginLeft:100,marginTop:6,fontSize:20,fontWeight:'bold',color:'gray'}}>
                    Restaurant
                </Text>
                <Image source={require("../src/assets/personicon.png")} 
                style={{height:20,width:20,marginTop:7,marginLeft:85}}
                />  
                </View>

                <View style={{marginTop:20,marginLeft:15,width:'25%',height:90,elevation:4,borderRadius:4}}>
                <Image source={require("../src/assets/restauranticon.png")} 
                style={topicons.parent}
                />
                <Text style={toptext.parent}>
                    Restuarant
                </Text>
                </View>
                <View style={{marginTop:-90,marginLeft:135,width:'25%',height:90,elevation:4,borderRadius:4}}>
                <Image source={require("../src/assets/coffee.png")} 
                style={topicons.parent}
                />
                <Text style={toptext.parent}>
                    Coffee & Tea
                </Text>
                </View>
                <View style={{marginTop:-90,marginLeft:250,width:'25%',height:90,elevation:4,borderRadius:4}}>
                <Image source={require("../src/assets/clubicon.png")} 
                style={topicons.parent}
                />
                <Text style={toptext.parent}>
                Bar & Club
            </Text>
                </View>
                
            <View style={restaurantflex.parent}>
                <Image source={require("../src/assets/thealpha.jpg")} 
                style={restaurantimages.parent}
                />
                <Text style={restaurantname.parent}>
                    The Alpha
                </Text>
                <Text style={restaurant.parent}>
                    RESTAURANT
                </Text>
                <Text style={status.parent}>
                    Opens Now
                </Text>
                <Text style={distance.parent}>
                •    400km From you  	 •
                </Text>
                <Text style={distance.parent}>
                    Gujrat
                </Text>
                <Text style={rate.parent}>
                    $ $ $ $
                </Text>
                <Text style={unrate.parent}>
                    $
                </Text>
                 <Text style={round.parent}>
                        9.0
                    </Text>
            </View>


            <View style={restaurantflex.parent}>
            <Image source={require("../src/assets/whiskybar.jpg")} 
                style={restaurantimages.parent}
                />
                <Text style={restaurantname.parent}>
                    Whisky Bar
                </Text>
                <Text style={restaurant.parent}>
                    Club & Bar
                </Text>
                <Text style={status.parent}>
                    Opens Now
                </Text>
                <Text style={distance.parent}>
                •    550km From you  	 •
                </Text>
                <Text style={distance.parent}>
                    Rajpura
                </Text>
                <Text style={rate.parent}>
                    $ $ $ $ $
                </Text>
                <Text style={unrate.parent}>
                    
                </Text>
                 <Text style={round.parent}>
                        9.5
                    </Text>
            </View>
            <View style={restaurantflex.parent}>
            <Image source={require("../src/assets/casino.jpg")} 
                style={restaurantimages.parent}
                />
                <Text style={restaurantname.parent}>
                    The Casino
                </Text>
                <Text style={restaurant.parent}>
                    Bar & Restrau
                </Text>
                <Text style={status.parent}>
                    Opens Now
                </Text>
                <Text style={distance.parent}>
                •    1000km From you  	 •
                </Text>
                <Text style={distance.parent}>
                    Goa
                </Text>
                <Text style={rate.parent}>
                    $ $ $ $
                </Text>
                <Text style={unrate.parent}>
                    $
                </Text>
                 <Text style={round.parent}>
                        9.7
                    </Text>
            </View>
                


            </View>
           
        
            </ScrollView>
            
        )
    }
}
