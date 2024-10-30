import React, {useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import { widthScale } from "../assets/metric";

type TimePickerProps={
    getDataFromChild:(text: string) => void;
    time:string
} 

const TimePicker =({getDataFromChild,time}:TimePickerProps)=>{
    const [isVisible,setIsVisible]=useState(false);
    const [showTime,setShowTime]=useState(time);


   
    console.log("datePicker") 
    const confirmDate=(date:Date)=>{
       
        
        const tempDate:Date=new Date(date)
         const time = tempDate.toLocaleTimeString().split(' ')
          const timeTemp = time[0].split(":")
        
             
       
       
        const timeStringFormat = `${timeTemp[0]}:${timeTemp[1]} ${time[1]}`
        
        
        setShowTime(timeStringFormat)

        getDataFromChild(timeStringFormat)
     }
    return(
              
        <View style={{height:45,width:"50%",borderBottomWidth:1,paddingLeft:widthScale(10)}}>
            <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}
                style={{flex:1,justifyContent:"center"}}>
                    <Text style={{color:"white"}}>{showTime}</Text>
                    </TouchableOpacity>
            <DateTimePicker
            mode="time"
            
            isVisible={isVisible}
            onConfirm={(date)=>{confirmDate(date)
                setIsVisible(!isVisible)
            }}
            onCancel={()=>setIsVisible(!isVisible)}
            
            //To use the new iOS 14 style of datetime picker, set the display prop to inline:
           // display="inline"
            
            
            />
            </View>
           
        
    )
}
export default TimePicker;