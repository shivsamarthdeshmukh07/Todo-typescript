import React, { Children } from "react";
import { Text } from "react-native";
import Styles from "./styles";

 type TextInputProps ={
    value : string,
   style:object,
    size:string
 }

const TextGeneric =({value,size,style}:TextInputProps)=>{
    return(
    <Text style={[size=="m"?Styles.mediumText:size==="l"?Styles.largeText:Styles.smallText,style]}>
        {value}
    </Text>
    )
}

export default TextGeneric;