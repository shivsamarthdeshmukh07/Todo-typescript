import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home:undefined
    CreateTask:{
        name?: string;
        completed?: boolean;
        date?: string; 
        description?: string;
        priority?: string; 
        time?: any; 
      };
}

export type HomeScreenNavigationProps= NativeStackScreenProps<RootStackParamList,
"Home"
>;

export type CreateTaskScreenNavigationProps= NativeStackScreenProps<RootStackParamList,
"CreateTask"
>;