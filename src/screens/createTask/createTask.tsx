import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fontScale, heightScale, widthScale} from '../../assets/metric';
import BackIcon from 'react-native-vector-icons/Ionicons';
import TimeIcon from 'react-native-vector-icons/MaterialIcons';
import TextGeneric from '../../components/generic/text/textGeneric';
import TextInputGeneric from '../../components/generic/textInput/textInputGeneric';
import TimePicker from '../../components/timePicker/timePicker';
import LinearGradient from 'react-native-linear-gradient';
import {CreateTaskScreenNavigationProps} from '../../routes/type';
import CalenderComponent from '../../components/calenderStrip/calenderComponent';
import {AppDispatch, RootState} from '../../redux/rtk/todoStore';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo, updateTodo} from '../../redux/rtk/todoSlice';
import {Color} from '../../assets/constants/Color';
import Styles from './style';

const timeIcon = (
  <TimeIcon name={'access-time'} size={25} color={Color.purple} />
);
const back = (
  <BackIcon name="arrow-back-circle-outline" size={30} color={Color.white} />
);

const CreateTask = ({navigation, route}: CreateTaskScreenNavigationProps) => {
  // const { name, completed, date, description, priority, time } = route.params || {};
  const [name, setName] = useState(route.params.name);
  const id = route.params.id;
  const completed = true;
  const [todo, setDescription] = useState(route.params.todo);
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [isEnabled, setIsEnabled] = useState(false);
  const [priority, setPriority] = useState('low');
  const [date, setDate] = useState(new Date());
  const dateArr = date.toDateString().split(' ');
  const formatedDate = dateArr[2] + ' ' + dateArr[1];
  const dispatch: AppDispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.todo.arr);

  // console.log("hjgj",route.params)

  return (
    <View style={Styles.createContainer}>
      <View style={Styles.header}>
        <Pressable onPress={() => navigation.goBack()}>{back}</Pressable>
        <TextGeneric
          value={route.params.id ? 'Update Task' : `Create Task`}
          size="l"
          style={{}}
        />
        <Text> </Text>
      </View>
      <CalenderComponent setDate={setDate} />

      <TextGeneric
        value="Schedule"
        size="m"
        style={{marginTop: heightScale(25), fontWeight: '500'}}
      />

      <TextInputGeneric
        value={name}
        placeHolder="Name"
        onChangeText={setName}
        style={{
          marginTop: heightScale(15),
          width: widthScale(335),
          borderWidth: 0.5,
          borderColor: Color.white,
          borderRadius: 5,
          paddingLeft: 5,
        }}
      />
      <TextInputGeneric
        value={todo}
        placeHolder="Description"
        onChangeText={setDescription}
        style={{
          marginTop: heightScale(15),
          height: heightScale(80),
          width: widthScale(335),
          borderWidth: 0.5,
          borderColor: Color.white,
          borderRadius: 5,
          paddingLeft: 5,
        }}
      />
      <View style={Styles.timeName}>
        <TextGeneric value="Start Time" size="m" style={{}} />
        <TextGeneric
          value="End Time"
          size="m"
          style={{marginLeft: widthScale(100)}}
        />
      </View>
      <View style={Styles.TimeDisplay}>
        <View style={Styles.timeIcon}>
          {timeIcon}
          <TimePicker time={startTime} getDataFromChild={setStartTime} />
        </View>
        <View style={Styles.timeIcon}>
          {timeIcon}
          <TimePicker time={endTime} getDataFromChild={setEndTime} />
        </View>
      </View>

      <TextGeneric
        value="Priority"
        size="m"
        style={{marginTop: heightScale(20)}}
      />

      <View style={Styles.priorityContainer}>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 2,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor: Color.white,
            backgroundColor: priority === 'low' ? Color.brown : Color.black,

            // borderColor: data.priority === 'low' ? 'orange' : 'black',
          }}
          onPress={() => {
            setPriority('low');
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingTop: 5,
              color: priority === 'low' ? Color.black : Color.white,
              fontSize: fontScale(16),
            }}>
            Low
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 2,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor: Color.white,
            backgroundColor: priority === 'medium' ? Color.cyan : Color.black,
          }}
          onPress={() => {
            setPriority('medium');
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingTop: 5,
              color: priority === 'medium' ? Color.black : Color.white,
              fontSize: fontScale(16),
            }}>
            Medium
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 2,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor: Color.white,
            backgroundColor: priority === 'high' ? Color.pink : Color.black,
          }}
          onPress={() => {
            setPriority('high');
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingTop: 5,
              color: priority === 'high' ? Color.black : Color.white,
              fontSize: fontScale(16),
            }}>
            High
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.switchText}>
        <TextGeneric
          value="Get alert for this task"
          size="s"
          style={{fontWeight: '300'}}
        />
        <Switch
          style={Styles.switch}
          trackColor={{false: Color.white, true: Color.purple}}
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
      {route.params.id ? (
        <View style={Styles.submitContainer}>
          <Pressable
            onPress={() =>
              dispatch(
                updateTodo({
                  id,
                  name,
                  todo,
                  formatedDate,
                  startTime,
                  endTime,
                  priority,
                  completed,
                }),
              )
            }>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[Color.purple, Color.red]}
              style={Styles.submitButton}>
              <TextGeneric
                value="Edit Task"
                size="m"
                style={{fontWeight: '500'}}
              />
            </LinearGradient>
          </Pressable>
          <Pressable onPress={() => dispatch(deleteTodo(route.params.id))}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[Color.gray, Color.darkGray]}
              style={Styles.submitButton}>
              <TextGeneric
                value="Delete Task"
                size="m"
                style={{fontWeight: '500'}}
              />
            </LinearGradient>
          </Pressable>
        </View>
      ) : (
        <Pressable
          onPress={() =>
            dispatch(
              addTodo({
                name,
                todo,
                formatedDate,
                startTime,
                endTime,
                priority,
                completed,
              }),
            )
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Color.purple, Color.red]}
            style={{
              height: 50,
              width: 350,
              marginTop: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextGeneric
              value="Create Task"
              size="m"
              style={{fontWeight: '500'}}
            />
          </LinearGradient>
        </Pressable>
      )}
    </View>
  );
};

export default CreateTask;
