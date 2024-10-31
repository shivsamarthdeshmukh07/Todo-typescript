import { StyleSheet } from "react-native";
import { heightScale, widthScale } from "../../assets/metric";
import { Color } from "../../assets/constants/Color";


const Styles = StyleSheet.create({
     taskContainer:{flexDirection:"row",marginTop:heightScale(20),height:heightScale(70),width:widthScale(335), backgroundColor:"black",borderRadius:15,},
     sideContainer:{width:widthScale(15),backgroundColor:"white",borderTopLeftRadius:10,borderEndStartRadius:10},
     description:{justifyContent:"center",width:widthScale(275),paddingLeft:widthScale(15)},
     datecontainer:{flexDirection:"row",alignItems:"center",marginTop:heightScale(5)}
})

export default Styles;