import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { HomeScreenNavigationProps } from "../../routes/type";
import { widthScale } from "../../assets/metric";
import TextGenric from "../../components/generic/textGeneric";
import Styles from "./styles";
import SearchIcon from 'react-native-vector-icons/EvilIcons';

const search = <SearchIcon name="pencil" size={35} color={"white"}/>

const Home = ({navigation}:HomeScreenNavigationProps)=>{
const num = 5;
    return(
        
       <View style={Styles.homeContainer}>
            <TextGenric value={`You have got ${num} tasks`}  size="l" style={{}}/>
            <View style={{flexDirection:"row"}}>
            <TextGenric value={`today to complete `}  size="l" style={{}}/>
            {search}
            </View>
       </View>

    )
}

export default Home;