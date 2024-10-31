import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import TextGeneric from "../../components/generic/text/textGeneric";
import { heightScale, widthScale } from "../../assets/metric";
import { DisplayTodosScreenNavigationProps } from "../../routes/type";
import BackIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient";
import TaskComponent, { TaskComponentProps } from "../../components/taskComponent/taskComponent";
import { baseUrl } from "../../assets/constants/url";
import { Color } from "../../assets/constants/Color";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rtk/todoStore";
import Styles from "./style";


const back = <BackIcon name='arrow-back-circle-outline' size={30} color={Color.white}/>

const DisplayTodos = ({navigation,route}:DisplayTodosScreenNavigationProps)=>{
const [data,setData]=useState<any>([]);
const [skip,setSkip]=useState(0);
const{ isCompleted }= route.params;
console.log("complted",isCompleted)


// const [date ,setDate]=useState(new Date())
const dateArr =new  Date().toDateString().split(' ')
const formatedDate = dateArr[2]+" "+dateArr[1]
console.log(formatedDate)
const tasks = useSelector((state: RootState) => state.todo.arr);


const server =(tempSkip: number)=>{
    fetch(`${baseUrl}?limit=5&skip=${tempSkip}`)
    .then(res => res.json())
    .then(res=>{

        if(isCompleted===true){
            const completedTodos=res.todos.filter((item:TaskComponentProps)=>item.completed===true)
            setData(completedTodos)
        }else if(isCompleted===false){
            const completedTodos=res.todos.filter((item:TaskComponentProps)=>item.completed===false)
            setData(completedTodos)
        }else{
            setData(res.todos)
        }
    })
        //setData(res.todos)
}

const localData=()=>{
    setData(tasks)
}
     
    // useEffect(()=>{
    //     fetch(`${baseUrl}?limit=5&skip=${skip}`)
    // .then(res => res.json())
    // .then(res=>{

    //     if(isCompleted===true){
    //         const completedTodos=res.todos.filter((item:TaskComponentProps)=>item.completed===true)
    //         setData(completedTodos)
    //     }else if(isCompleted===false){
    //         const completedTodos=res.todos.filter((item:TaskComponentProps)=>item.completed===false)
    //         setData(completedTodos)
    //     }else{
    //         setData(res.todos)
    //     }
        
    //     //setData(res.todos)
    // })
     
    //     },[skip])
        console.log("fg",data)
    return(
        <View style={Styles.displayContainer}>
            <View  style={Styles.headerContainer}>
            <Pressable onPress={()=>navigation.navigate("Home")}>
            {back}
            </Pressable>
            <TextGeneric value={"Todos"} size='l' style={{}}/>
            <Text>    </Text>
           </View>

           <View style={Styles.upperButtonContainer}>
        <Pressable  onPress={()=>localData()}>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[Color.purple,Color.red]}
       style={Styles.upperButton}
       >
        <TextGeneric value='store Task' size='m' style={{fontWeight:"500"}}/>
       </LinearGradient>
       </Pressable>
       <Pressable onPress={()=>server(skip)}>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[Color.purple,Color.red]}
       style={Styles.upperButton}
       >
        <TextGeneric value='server Task' size='m' style={{fontWeight:"500"}}/>
       </LinearGradient>
       </Pressable>
       </View>
       <ScrollView>
       {data.map((item:TaskComponentProps)=>(
        <TaskComponent id={item.id} todo={item.todo} completed={item.completed} priority="" time={undefined} date={formatedDate}/>
       ))}
        </ScrollView>
       <View style={Styles.pagingContainer}>
       <Pressable
       disabled={skip==0}
       onPress={()=>setSkip(skip=>skip-5)}
       style={[Styles.pagingButtons,{borderColor:skip==0?Color.gray:Color.white}]}
       >
        <TextGeneric value='prev' size='m' style={{fontWeight:"500",color:skip==0?Color.gray:Color.white}}/>
       </Pressable>
       <Pressable 
       onPress={()=>{setSkip(skip=>skip+5)
        const tempSkip = skip + 5;
        console.log("number",tempSkip)
        server(tempSkip)
       }}
       
       style={{height:40,width:100,borderRadius:15,justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:Color.white}}
       >
        <TextGeneric value='next' size='m' style={{fontWeight:"500",color:Color.white}}/>
       </Pressable>
       </View>
           
        </View>
    )
}

export default DisplayTodos;