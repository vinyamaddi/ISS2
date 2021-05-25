import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground,TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
export default class Homescreen extends React.Component{
    render(){
        return(
            <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <SafeAreaView style={styles.Androidsafearea}/>
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                <View style={styles.titlebar}>
                <Text style= {styles=titlestyle}> ISStracker app </Text> 
                </View>
                <TouchableOpacity style={styles.routecard} onPress={()=>this.props.navigation.navigate("ISSlocation")}>
               <Text style={styles.routetext}> ISSlocation </Text>
               <Text style={styles.knowmore}> {"Know More...."} </Text>
               <Text style={styles.bgdigit}> 1 </Text>
               <Image source={require("../assets/iss_icon.png")}style={styles.iconimage}/>
                </TouchableOpacity>

               <TouchableOpacity style={styles.routecard} onPress={()=>this.props.navigation.navigate("Meteor")}>
               <Text style={styles.routetext}> Meteor </Text>
               <Text style={styles.knowmore}> {"Know More...."} </Text>
               <Text style={styles.bgdigit}> 2 </Text>
               <Image source={require("../assets/meteor_icon.png")}style={styles.iconimage}/>
                </TouchableOpacity>       

                <TouchableOpacity style={styles.routecard} onPress={()=>this.props.navigation.navigate("Update")}>
               <Text style={styles.routetext}> Update </Text>
               <Text style={styles.knowmore}> {"Know More...."} </Text>
               <Text style={styles.bgdigit}> 3 </Text>
               <Image source={require("../assets/rocket_icon.png")}style={styles.iconimage}/>
                </TouchableOpacity>    
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    titlestyle :{ 
  flex:1, 
  backgroundColor:"hotpink",height:50,width:350,justifyContent:"center",alignItems:"center",
  paddingLeft:120,textWeight:"bold"
        
    },
    container:{flex:1},
    Androidsafearea:{marginTop:Platform.OS=="android" ?StatusBar.currentHeight:0 },
    backgroundImage:{flex:1,resizeMode:'cover'},
    routecard:{flex:0.5,marginLeft:50,marginTop:50,marginRight:50,borderRadius:30,backgroundColor:"white"},
    titlebar:{flex:0.15,justifyContent:center,alignItems:center},
    titlestyle:{fontSize:40,fontWeight:"bold",color:"white"},
    routetext:{fontSize:35,fontWeight:"bold",color:"black",marginTop:75,paddingLeft:20},
    knowMore: { paddingLeft: 30, color: "red", fontSize: 15 }, 
    bgDigit: { position: "absolute", color: "rgba(183, 183, 183, 0.5)", fontSize: 150, right: 20, bottom: -15, zIndex: -1 }, 
    iconImage: { position: "absolute", height: 200, width: 200, resizeMode: "contain", right: 20, top: -80 }
    






})