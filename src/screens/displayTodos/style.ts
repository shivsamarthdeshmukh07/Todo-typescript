import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../assets/metric';
import {Color} from '../../assets/constants/Color';

const Styles = StyleSheet.create({
    displayContainer:{
            
      flex:1,
      paddingHorizontal:widthScale(20),
      paddingVertical:heightScale(80),
      backgroundColor:Color.black
  },
  headerContainer:{flexDirection:"row",justifyContent:"space-between",marginBottom:heightScale(30)},

  upperButtonContainer:{flexDirection:"row",justifyContent:"space-between"},
  upperButton:{height:50,width:150,borderRadius:15,justifyContent:"center",alignItems:"center"},
  pagingContainer:{flexDirection:"row",justifyContent:"space-between",marginTop:heightScale(30)},
  pagingButtons:{height:40,width:100,borderRadius:15,justifyContent:"center",alignItems:"center",borderWidth:1,}
});

export default Styles;
