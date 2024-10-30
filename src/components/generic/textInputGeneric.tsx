import React from "react";
import { TextInput } from "react-native";
import Styles from "./styles";

type TextInputProps={
 placeHolder :string;
 onChangeText : (text: string) => void;
 style: object


}

const TextInputGeneric =({placeHolder,onChangeText,style}:TextInputProps)=>{
  
    return(
        <TextInput 
        style={[Styles.inputText,style]} 
        placeholder={placeHolder}
        onChangeText={onChangeText}
        multiline={true}
        placeholderTextColor={"white"}
        
        />
    )
}

export default TextInputGeneric;