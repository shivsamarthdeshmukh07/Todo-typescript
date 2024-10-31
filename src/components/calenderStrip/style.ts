import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../assets/metric";
import { Color } from "../../assets/constants/Color";
import CalenderComponent from "./calenderComponent";

const Styles = StyleSheet.create({
 CalenderContainer:{marginTop:heightScale(15),height:75},
 calenderLeftIcon:{
    borderRadius:5,

      color:"red",
      backgroundColor:Color.purple,
      height:heightScale(30)
   },
   calenderRightIcon:{
    borderRadius:5,
    color:"red",
    backgroundColor:Color.purple,
    height:heightScale(30)
 }
})

export default Styles;