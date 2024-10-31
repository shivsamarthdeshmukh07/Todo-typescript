import React from "react";
import { Pressable, Text, View } from "react-native";
import { heightScale, widthScale } from "../../assets/metric";
import CheckBox from "@react-native-community/checkbox";
import TextGenric from "../generic/text/textGeneric";
import { Color } from "../../assets/constants/Color";
import DateIcon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Styles from "./style";



const dateIcon = <DateIcon name={"date"} size={18} color={Color.white}/>

export type TaskComponentProps={
    id:number
    completed:boolean;
    date:string;
    time : any;
    todo:any;
    priority:string;
  }
const TaskComponent = ({id,completed,date,todo,priority,time="9:00 AM -6:00 PM"}:TaskComponentProps)=>{
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <Pressable style={Styles.taskContainer}
        onLongPress={()=>navigation.navigate("CreateTask",{completed,date,todo,priority,time,id})}
        >
          <View style={Styles.sideContainer}>

          </View>
          <View style={Styles.description}>
            <TextGenric value={`${todo}`} size="m" style={{}}/>
            <View style={Styles.datecontainer}>
              {dateIcon}
              <TextGenric value={`${date}`} size="s" style={{paddingLeft:widthScale(5),paddingTop:heightScale(3)}}/>
              <TextGenric value={`${time}`} size="s" style={{paddingLeft:widthScale(10),paddingTop:heightScale(3)}}/>

            </View>


          </View>
          <View style={{justifyContent:"center"}}>
          <CheckBox
           style={{height:20,width:20,}}
           onCheckColor={Color.white}
           onFillColor={Color.purple}
           value={completed}
          //  onValueChange={onSelect}
             onTintColor={Color.purple}
             tintColor={Color.purple}
            />
          </View>


        </Pressable>
    )
}

export default TaskComponent;