import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../assets/metric";
import { Color } from "../../assets/constants/Color";

const Styles = StyleSheet.create({
   homeContainer:{
    flex:1,
    paddingHorizontal:widthScale(20),
    paddingTop:heightScale(80),
    paddingBottom:heightScale(20),
    backgroundColor:Color.black
   },
   createButton:{position:"absolute",top:heightScale(715),left:widthScale(295),borderRadius:28,height:heightScale(55),backgroundColor:Color.purple,width:widthScale(55),zIndex:1},

   row:{flexDirection:"row"},
   searchIcon:{marginTop:heightScale(22),marginRight:widthScale(10)},
   progressBar:{marginTop:heightScale(10),height:heightScale(20),width:"100%",backgroundColor:Color.darkPurple,borderRadius:50},
   CompletedProgressBar:{height:heightScale(17),backgroundColor:Color.purple,borderRadius:50},
   buttonContainer:{flexDirection:"row",justifyContent:'space-between',marginTop:heightScale(40)},
   buttons:{borderWidth:1.2,borderColor:Color.white,borderRadius:15,height:heightScale(32),justifyContent:"center",width:widthScale(100)},

})

export default Styles;