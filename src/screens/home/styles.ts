import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../assets/metric";

const Styles = StyleSheet.create({
   homeContainer:{
    flex:1,
    paddingHorizontal:widthScale(20),
    paddingVertical:heightScale(80),
    backgroundColor:"red"
   }
})

export default Styles;