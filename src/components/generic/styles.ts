import React from "react";
import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../assets/metric";

const Styles = StyleSheet.create({
    mediumText:{
        fontSize:18,
        fontWeight:"400",
        color:"white"
    },
    smallText:{
        fontSize:14,
        fontWeight:"300",
        color:"white"
    },

    largeText:{
        fontSize:24,
        fontWeight:"600",
        color:"white"
    },

    inputText:{
        height:heightScale(30),
        width:widthScale(300),
        backgroundColor:"black",
        color:"white"
        
    }

})

export default Styles;