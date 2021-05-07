import {View, Text, Image,TextInput,Button, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';
import React, { Component } from 'react';
import { header,textstyle,menuflex,image,menutextstyle,menutextstyle2,menutextstyle3} from './styles';

class menu extends Component{
    render(){
        return(
            <ScrollView>
            <View>
            <View style={header.parent}>
                <Image source={require("../src/assets/backicon.png")} 
                style={{height:30,width:30,marginTop:3}}
                />
                <Text style={textstyle.parent}>
                    Menu
                </Text>
                <Image source={require("../src/assets/search_icn.png")} 
                style={{height:20,width:20,marginTop:7,marginLeft:110}}
                />
            </View>

            <View style={menuflex.parent}>
               <Image source={require("../src/assets/mexicanspecialfood.jpg")} 
                style={image.parent}
                />
                <Text style={menutextstyle.parent}>
                    Mexican Special Food
                </Text>
                <Text style={menutextstyle2.parent}>
                Mexican dishes involve the use of crusts or breads. 'Masa'..
                </Text>
                <Text style={menutextstyle3.parent}>
                $7.00
                </Text>
            </View>

            <View style={menuflex.parent}>
               <Image source={require("../src/assets/italianpizza.jpg")} 
                style={image.parent}
                />
                <Text style={menutextstyle.parent}>
                    Italian       Pizza
                </Text>
                <Text style={menutextstyle2.parent}>
                Pizza is savory dish of Italian origin consisting of a usually..
                </Text>
                <Text style={menutextstyle3.parent}>
                $12.00
                </Text>
            </View>

            <View style={menuflex.parent}>
               <Image source={require("../src/assets/leafgreenthialand.jpg")} 
                style={image.parent}
                />
                <Text style={menutextstyle.parent}>
                    Leaf Green Thialand
                </Text>
                <Text style={menutextstyle2.parent}>
                our green leaf dish selection for the very best in..
                </Text>
                <Text style={menutextstyle3.parent}>
                $5.00
                </Text>
            </View>

            <View style={menuflex.parent}>
               <Image source={require("../src/assets/sandwich.jpg")} 
                style={image.parent}
                />
                <Text style={menutextstyle.parent}>
                    Sandwiches and Drinks
                </Text>
                <Text style={menutextstyle2.parent}>
                its basic form, cheese, or other food placed between two slices..
                </Text>
                <Text style={menutextstyle3.parent}>
                $25.00
                </Text>
            </View>

            <View style={menuflex.parent}>
               <Image source={require("../src/assets/burger.jpg")} 
                style={image.parent}
                />
                <Text style={menutextstyle.parent}>
                    Veg Burger and SoftFood
                </Text>
                <Text style={menutextstyle2.parent}>
                Uses ingredients like beans, soybeans and tofu, nuts, ..
                </Text>
                <Text style={menutextstyle3.parent}>
                $15.00
                </Text>
            </View>

            <View style={menuflex.parent}>
               <Image source={require("../src/assets/desserts.jpg")} 
                style={image.parent}
                />
                <Text style={menutextstyle.parent}>
                    Desserts, IceCreams
                </Text>
                <Text style={menutextstyle2.parent}>
                 many confections, such as cakes, tarts, cookies, biscuits..
                </Text>
                <Text style={menutextstyle3.parent}>
                $30.00
                </Text>
            </View>
            </View>
            </ScrollView>
        )
    }
}
export default menu;