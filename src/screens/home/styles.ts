import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../assets/metric";
import { Color } from "../../assets/constants/Color";

const Styles = StyleSheet.create({
   homeContainer:{
    flex:1,
    paddingHorizontal:widthScale(20),
    paddingVertical:heightScale(80),
    backgroundColor:"black"
   },
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