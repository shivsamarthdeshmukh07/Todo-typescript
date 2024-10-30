import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { HomeScreenNavigationProps } from "../../routes/type";
import { fontScale, heightScale, widthScale } from "../../assets/metric";
import TextGenric from "../../components/generic/textGeneric";
import Styles from "./styles";
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import TextInputGeneric from "../../components/generic/textInputGeneric";
import CalendarStrip from 'react-native-calendar-strip';
import TaskComponent from "../../components/taskComponent";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Color } from "../../assets/constants/Color";
import CalenderComponent from "../../components/generic/calenderComponent";


const search = <SearchIcon name="search" size={25} color={"white"}/>

const Home = ({navigation}:HomeScreenNavigationProps)=>{
const num = 5;
const [input,setInput]= useState('')
const [date ,setDate]=useState(new Date())
const dateArr =date.toDateString().split(' ')
const formatedDate = dateArr[2]+" "+dateArr[1]
console.log(formatedDate)

    return(
        
       <View style={Styles.homeContainer}>
        <Pressable style={{position:"absolute",top:heightScale(715),left:widthScale(295),borderRadius:28,height:heightScale(55),backgroundColor:Color.purple,width:widthScale(55),zIndex:1}}
         onPress={()=>navigation.navigate("CreateTask",{})}
        > 
            <TextGenric value="+" size="m" style={{alignSelf:"center",fontSize:fontScale(40),color:"black"}}/>
        </Pressable>
            <TextGenric value={`You have got ${num} tasks`}  size="l" style={{}}/>
            <View style={{flexDirection:"row"}}>
            <TextGenric value={`today to complete `}  size="l" style={{}}/>
            <Image style={{height:heightScale(25),width:widthScale(25)}} source={require('../../assets/images/pencil.jpg')}/>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{marginTop:heightScale(22),marginRight:widthScale(10)}}>
                {search}
                </View>
            <TextInputGeneric placeHolder="Search task here" onChangeText={setInput}  style={{marginTop:heightScale(20)}}/>
            </View>
           <CalenderComponent  setDate={setDate}/>
              <View style={{marginTop:heightScale(20)}}>
            <TextGenric value={`Progress Bar`}  size="m" style={{fontWeight:"500"}}/>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <TextGenric value={`2/3 task completed`}  size="m" style={{fontWeight:"300",fontSize:fontScale(14),paddingTop:heightScale(5)}}/>
              <TextGenric value="70%" size="m" style={{}}/>
              </View>
             <View style={{marginTop:heightScale(10),height:heightScale(20),width:"100%",backgroundColor:"#412945",borderRadius:50}}>
             <View style={{height:heightScale(17),width:"70%",backgroundColor:Color.purple,borderRadius:50}}/>

             </View>
             <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:heightScale(40)}}>
              <View style={{borderWidth:1.2,borderColor:"white",borderRadius:15,height:heightScale(32),justifyContent:"center",width:widthScale(100)}}>
              <TextGenric value="All Tasks" size="m" style={{alignSelf:"center"}}/>

              </View>
              <View style={{borderWidth:1.2,borderColor:"white",borderRadius:15,height:heightScale(32),justifyContent:"center",width:widthScale(100)}}>

             <TextGenric value="Completed" size="m" style={{alignSelf:"center"}}/>
             </View>
             <View style={{borderWidth:1.2,borderColor:"white",borderRadius:15,height:heightScale(32),justifyContent:"center",width:widthScale(110)}}>

             <TextGenric value="Incompleted" size="m" style={{alignSelf:"center"}}/>
              </View>
             </View>
             <TextGenric value="Today's Tasks" size="m" style={{paddingTop:heightScale(20),fontWeight:"600"}}/>
             
              </View>
             <TaskComponent name={"hiiii"} completed={true} date={`${formatedDate}`} time={undefined} description={""} priority={""} />
             {/* <TaskComponent name={"hiiii"} completed={true} />
             <TaskComponent name={"hiiii"} completed={true} />
             <TaskComponent name={"hiiii"} completed={true} /> */}

       </View>

    )
}

export default Home;