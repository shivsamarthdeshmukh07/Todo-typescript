import React, { Children } from "react";
import { Text } from "react-native";
import Styles from "./styles";

 type TextInputProps ={
    value : string,
   style:object,
    size:string
 }

const TextGenric =({value,size,style}:TextInputProps)=>{
    return(
    <Text style={[size=="m"?Styles.mediumText:size==="s"?Styles.smallText:Styles.largeText,style]}>
        {value}
    </Text>
    )
}

export default TextGenric;