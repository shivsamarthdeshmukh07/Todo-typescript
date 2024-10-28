import { Dimensions } from "react-native";


const {width,height} = Dimensions.get("screen")

const guideWidth = 375;
const guideHeight = 812;

const widthScale = (size:number) =>(width/guideWidth)* size;
const heightScale = (size:number)=> (height/guideHeight)*size

const fontScale = (size:number, factor=0.5)=>Math.abs(size +(heightScale(size)-size)*factor)

export {widthScale,heightScale,fontScale}