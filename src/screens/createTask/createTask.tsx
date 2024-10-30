import React, { useState } from 'react'
import { Pressable, SafeAreaView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { fontScale, heightScale, widthScale } from '../../assets/metric';
import BackIcon from 'react-native-vector-icons/Ionicons';
import TimeIcon from 'react-native-vector-icons/MaterialIcons';

import TextGeneric from '../../components/generic/textGeneric';
import CalendarStrip from 'react-native-calendar-strip';
import TextInputGeneric from '../../components/generic/textInputGeneric';
import TimePicker from '../../components/timePicker';
import LinearGradient from 'react-native-linear-gradient';
import { CreateTaskScreenNavigationProps } from '../../routes/type';
import CalenderComponent from '../../components/generic/calenderComponent';

const timeIcon = <TimeIcon name={"access-time"}  size={25} color={"#e589f0"}/>
const back = <BackIcon name='arrow-back-circle-outline' size={30} color={"white"}/>

const CreateTask =({navigation,route}:CreateTaskScreenNavigationProps)=>{
 // const { name, completed, date, description, priority, time } = route.params || {};
    const [name,setName]=useState(route.params.name);
    const [description,setDescription]= useState("");
    const[startTime,setStartTime]=useState("00:00")
    const[endTime,setEndTime]=useState("00:00")
    const [isEnabled, setIsEnabled] = useState(false);
const [date ,setDate]=useState(new Date())
console.log("hjgj",name)

    
    return(
        <View style={{
        flex:1,
        paddingHorizontal:widthScale(20),
        paddingVertical:heightScale(80),
        backgroundColor:"black"
        }}>
           <View  style={{flexDirection:"row",justifyContent:"space-between",marginBottom:heightScale(30)}}>
            <Pressable onPress={()=>navigation.navigate("Home")}>
            {back}
            </Pressable>
            <TextGeneric value={name?"Update Task":`Create Task`} size='l' style={{}}/>
            <Text>    </Text>
           </View>
           <CalenderComponent  setDate={setDate}/>

             <TextGeneric value='Schedule' size='m' style={{marginTop:heightScale(25),fontWeight:"500"}}/>

             <TextInputGeneric placeHolder='Name' onChangeText={setName} style={{marginTop:heightScale(15),width:widthScale(335),borderWidth:0.5,borderColor:"white",borderRadius:5,paddingLeft:5}}/>
             <TextInputGeneric placeHolder='Description' onChangeText={setDescription} style={{marginTop:heightScale(15),height:heightScale(80),width:widthScale(335),borderWidth:0.5,borderColor:"white",borderRadius:5,paddingLeft:5}}/>
              <View style={{flexDirection:"row",marginTop:heightScale(20)}}>
                <TextGeneric value='Start Time' size='m' style={{}}/>
                <TextGeneric value='End Time' size='m'style={{marginLeft:widthScale(100)}}/>
              </View>
              <View style={{flexDirection:"row",width:widthScale(340),backgroundColor:"black",justifyContent:"space-between"}}>
              
                <View style={{flexDirection:"row",alignItems:"center"}}>
                  {timeIcon}
               <TimePicker  time={startTime} getDataFromChild={setStartTime}/>                
                  
                  </View>  
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                  {timeIcon}             
               <TimePicker  time={endTime} getDataFromChild={setEndTime}/>
               </View>  
              

              </View>
         
         <TextGeneric value='Priority' size='m' style={{marginTop:heightScale(20)}}/>

      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:5,}}>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 2,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor:"#FACBBA",
           
            // borderColor: data.priority === 'low' ? 'orange' : 'black',
          }}
          onPress={() => {}}>
          <Text style={{alignSelf: 'center', paddingTop: 5,color:"white",fontSize:fontScale(16)}}>Low</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 2,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor:"white"

            
          }}
          onPress={() => {}}>
          <Text style={{alignSelf: 'center', paddingTop: 5,color:"white",fontSize:fontScale(16)}}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 2,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor:"white"

            
          }}
          onPress={() => {}}>
          <Text style={{alignSelf: 'center', paddingTop: 5,color:"white",fontSize:fontScale(16)}}>High</Text>
        </TouchableOpacity>

      </View>

      <View style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between",marginTop:heightScale(30)}}>
      <TextGeneric value='Get alert for this task' size='s' style={{fontWeight:"300"}}/>
       <Switch style={{height:heightScale(20),transform: [{ scale: 0.6 }],}}
        trackColor={{false: 'white', true: '#cf7cb2'}}
      
        onValueChange={()=>setIsEnabled(!isEnabled)}
          value={isEnabled}

       />
      

      </View>
      {name?
       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={["#e589f0",'#c95185']}
       style={{height:50,width:170,marginTop:30,borderRadius:15,justifyContent:"center",alignItems:"center"}}
       >
        <TextGeneric value='Edit Task' size='m' style={{fontWeight:"500"}}/>
       </LinearGradient>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={["gray",'#525050']}
       style={{height:50,width:170,marginTop:30,borderRadius:15,justifyContent:"center",alignItems:"center"}}
       >
        <TextGeneric value='Delete Task' size='m' style={{fontWeight:"500"}}/>
       </LinearGradient>
       </View>
       :
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={["#e589f0",'#c95185']}
       style={{height:50,width:350,marginTop:30,borderRadius:15,justifyContent:"center",alignItems:"center"}}
       >
        <TextGeneric value='Create Task' size='m' style={{fontWeight:"500"}}/>
       </LinearGradient>
    }
      
       
      
        </View>
    )
}

export default CreateTask;