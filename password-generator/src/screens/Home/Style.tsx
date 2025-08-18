import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#4D4D4D',
    paddingTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    width: '70%',
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '70%',
    alignItems: 'center',
  }
});

export default styles