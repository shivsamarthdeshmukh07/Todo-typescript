import React from "react";
import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../../assets/metric";
import { Color } from "../../../assets/constants/Color";

const Styles = StyleSheet.create({
    mediumText:{
        fontSize:18,
        fontWeight:"400",
        color:Color.white
    },
    smallText:{
        fontSize:14,
        fontWeight:"300",
        color:Color.white
    },

    largeText:{
        fontSize:24,
        fontWeight:"600",
        color:Color.white
    },

    inputText:{
        height:heightScale(30),
        width:widthScale(300),
        backgroundColor:Color.black,
        color:Color.white
        
    }

})

export default Styles;