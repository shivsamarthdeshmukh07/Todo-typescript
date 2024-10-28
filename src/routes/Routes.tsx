import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home/Home";
import { RootStackParamList } from "./type";

const Routes = ()=>{
    const Stack = createNativeStackNavigator<RootStackParamList>()
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}
 export default Routes;