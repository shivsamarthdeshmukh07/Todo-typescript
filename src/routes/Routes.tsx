import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home/Home";
import { RootStackParamList } from "./type";
import CreateTask from "../screens/createTask/createTask";

const Routes = ()=>{
    const Stack = createNativeStackNavigator<RootStackParamList>()
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
            <Stack.Screen options={{headerShown:false}} name="CreateTask" component={CreateTask}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
}
 export default Routes;