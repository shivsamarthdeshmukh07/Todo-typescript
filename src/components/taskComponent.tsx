import React from "react";
import { Pressable, Text, View } from "react-native";
import { heightScale, widthScale } from "../assets/metric";
import CheckBox from "@react-native-community/checkbox";
import TextGenric from "./generic/textGeneric";
import { Color } from "../assets/constants/Color";
import DateIcon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../routes/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



const dateIcon = <DateIcon name={"date"} size={18} color={"white"}/>

type TaskComponentProps={
    name:string;
    completed:boolean;
    date:string;
    time : any;
    description:string;
    priority:string;
 

  }
const TaskComponent = ({name,completed,date,description,priority,time="9:00 AM -6:00 PM"}:TaskComponentProps)=>{
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <Pressable style={{flexDirection:"row",marginTop:heightScale(20),height:heightScale(70),width:widthScale(335), backgroundColor:"black",borderRadius:15,}}
        onLongPress={()=>navigation.navigate("CreateTask",{name,completed,date,description,priority,time})}
        >
          <View style={{width:widthScale(15),backgroundColor:"white",borderTopLeftRadius:10,borderEndStartRadius:10}}>

          </View>
          <View style={{justifyContent:"center",width:widthScale(275),paddingLeft:widthScale(15)}}>
            <TextGenric value={`${name}`} size="m" style={{}}/>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:heightScale(5)}}>
              {dateIcon}
              <TextGenric value={`${date}`} size="s" style={{paddingLeft:widthScale(5),paddingTop:heightScale(3)}}/>
              <TextGenric value={`${time}`} size="s" style={{paddingLeft:widthScale(10),paddingTop:heightScale(3)}}/>

            </View>


          </View>
          <View style={{justifyContent:"center"}}>
          <CheckBox
           style={{height:20,width:20,}}
           onCheckColor={"white"}
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