import React, { useEffect, useState } from "react";
import { FlatList, Image, ListRenderItem, ListRenderItemInfo, Pressable, SafeAreaView, Text, View } from "react-native";
import { HomeScreenNavigationProps } from "../../routes/type";
import { fontScale, heightScale, widthScale } from "../../assets/metric";
import TextGenric from "../../components/generic/text/textGeneric";
import Styles from "./styles";
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import TextInputGeneric from "../../components/generic/textInput/textInputGeneric";
import CalendarStrip from 'react-native-calendar-strip';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Color } from "../../assets/constants/Color";
import CalenderComponent from "../../components/calenderStrip/calenderComponent";
import { baseUrl } from "../../assets/constants/url";
import TaskComponent, { TaskComponentProps } from "../../components/taskComponent/taskComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/rtk/todoStore";



const search = <SearchIcon name="search" size={25} color={Color.white}/>

const Home = ({navigation}:HomeScreenNavigationProps)=>{
const num = 5;
const [input,setInput]= useState<any>('')
const [date ,setDate]=useState(new Date())
const dateArr =date.toDateString().split(' ')
const formatedDate = dateArr[2]+" "+dateArr[1]
console.log(formatedDate)
const [data,setData]=useState([]);

if(input===""){
  setInput(undefined)
}
const foundTodo = data.filter((item: TaskComponentProps)=>input === (item.todo).substring(0, input?.length))

    console.log("found",foundTodo)
    useEffect(()=>{
    fetch(`${baseUrl}/random/10`)
.then(res => res.json())
.then(res=>setData(res))
 
    },[date])
// console.log(data)



const completedTask = data?.filter((item:TaskComponentProps)=>item.completed===true)


const tasks = useSelector((state: RootState) => state.todo.arr);
const dispatch: AppDispatch = useDispatch();
console.log("t",data)

 
    return(
        
       <View style={Styles.homeContainer}>
        <Pressable style={Styles.createButton}
         onPress={()=>navigation.navigate("CreateTask",{})}
        > 
            <TextGenric value="+" size="m" style={{alignSelf:"center",fontSize:fontScale(40),color:"black"}}/>
        </Pressable>
            <TextGenric value={`You have got ${num} tasks`}  size="l" style={{}}/>
            <View style={Styles.row}>
            <TextGenric value={`today to complete `}  size="l" style={{}}/>
            <Image style={{height:heightScale(25),width:widthScale(25)}} source={require('../../assets/images/pencil.jpg')}/>
            </View>
            <View style={Styles.row}>
                <View style={Styles.searchIcon}>
                {search}
                </View>
            <TextInputGeneric value={null} placeHolder="Search task here" onChangeText={setInput}  style={{marginTop:heightScale(20)}}/>
            </View>
            <View>
            {foundTodo? 
             <FlatList
             data={foundTodo}
             // keyExtractor={(item) => item.name}
              renderItem={({item}:{item:TaskComponentProps})=>(
               <TaskComponent id={item.id} todo={item.todo} date={formatedDate} completed={item.completed} time={undefined} priority={""} />
              )}
             />
            :null}
            </View>
           <CalenderComponent  setDate={setDate}/>
              <View style={{marginTop:heightScale(20)}}>
            <TextGenric value={`Progress Bar`}  size="m" style={{fontWeight:"500"}}/>
              <View style={[Styles.row,{justifyContent:"space-between"}]}>
            <TextGenric value={`${completedTask?.length}/${data?.length} task completed`}  size="m" style={{fontWeight:"300",fontSize:fontScale(14),paddingTop:heightScale(5)}}/>
              <TextGenric value={`${(completedTask.length/data.length)*100}%`} size="m" style={{}}/>
              </View>
             <View style={Styles.progressBar}>
             <View style={[Styles.CompletedProgressBar,{width:`${(completedTask.length/data.length)*100}%`}]}/>

             </View>
             <View style={Styles.buttonContainer}>
              <Pressable style={Styles.buttons}
               onPress={()=>navigation.navigate("DisplayTodos",{})}
              >
              <TextGenric value="All Tasks" size="m" style={{alignSelf:"center"}}/>

              </Pressable>
              <Pressable style={Styles.buttons}
               onPress={()=>navigation.navigate("DisplayTodos",{isCompleted: true})}
              
              >

             <TextGenric value="Completed" size="m" style={{alignSelf:"center"}}/>
             </Pressable>
             <Pressable style={Styles.buttons}
               onPress={()=>navigation.navigate("DisplayTodos",{isCompleted: false})}
             
             >

             <TextGenric value="Incompleted" size="m" style={{alignSelf:"center"}}/>
              </Pressable>
             </View>
             <TextGenric value="Today's Tasks" size="m" style={{paddingTop:heightScale(20),fontWeight:"600",marginBottom:heightScale(5)}}/>
             
              </View>
             {/* <TaskComponent  completed={true} date={`${formatedDate}`} time={undefined} description={"b"} priority={""} /> */}
            <FlatList
            data={data}
            // keyExtractor={(item) => item.name}
             renderItem={({item}:{item:TaskComponentProps})=>(
              <TaskComponent id={item.id} todo={item.todo} date={formatedDate} completed={item.completed} time={undefined} priority={""} />
             )}
            />


            

       </View>

    )
}

export default Home;