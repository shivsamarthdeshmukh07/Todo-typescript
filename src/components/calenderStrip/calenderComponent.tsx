import React, { useState } from "react";
import { View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { fontScale, heightScale } from "../../assets/metric";

import { Color } from "../../assets/constants/Color";
import Styles from "./style";

type CalenderComponentProps={
  
  setDate:(value : Date)=>void;
}

const CalenderComponent = ({setDate}:CalenderComponentProps)=>{
    // const [date,setDate]=useState(new Date())
    
    return(
        <CalendarStrip
        style={Styles.CalenderContainer}
        calendarHeaderStyle={{height:heightScale(30),fontSize:fontScale(16),color:Color.purple}}
        dateNameStyle={{fontSize:fontScale(12),color:Color.white}}
        dateNumberStyle={{fontSize:fontScale(16),color:Color.white}}
        onDateSelected={(text)=>setDate(new Date(text.toString()))}
        selectedDate={new Date()}
        iconLeftStyle={Styles.calenderLeftIcon}
        iconRightStyle={Styles.calenderRightIcon} 
        daySelectionAnimation={{duration:200,type:"background",highlightColor:Color.purple}}          
        ></CalendarStrip>
    )
}
export default CalenderComponent;