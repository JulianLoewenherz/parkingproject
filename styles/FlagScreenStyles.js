// styles/FlagScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: '#2e86de',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 10,
  },
  imagePlaceholder: {
    height: 300,
    backgroundColor: '#dfe6e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  // New style for the custom touchable area that acts like a button.
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  // Style for the text inside the touchable button when no image is available.
  buttonText: {
    fontSize: 18,
    color: '#2e86de',
  },
  // Style for the image that will be displayed once a photo is taken.
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  footer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
  },
});

export default styles;
