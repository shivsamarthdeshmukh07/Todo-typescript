import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../assets/metric';
import {Color} from '../../assets/constants/Color';

const Styles = StyleSheet.create({
  createContainer: {
    flex: 1,
    paddingHorizontal: widthScale(20),
    paddingVertical: heightScale(80),
    backgroundColor: Color.black,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: heightScale(30),
  },

  timeName: {flexDirection: 'row', marginTop: heightScale(20)},

  TimeDisplay: {
    flexDirection: 'row',
    width: widthScale(340),
    backgroundColor: Color.black,
    justifyContent: 'space-between',
  },

  timeIcon: {flexDirection: 'row', alignItems: 'center'},

  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightScale(30),
  },

  switch: {height: heightScale(20), transform: [{scale: 0.6}]},

  submitContainer: {flexDirection: 'row', justifyContent: 'space-between'},

  submitButton: {
    height: 50,
    width: 170,
    marginTop: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
