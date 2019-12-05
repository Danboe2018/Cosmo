import {StyleSheet} from 'react-native';
import * as globals from '../../lib/globals';

const images = {

};

const styles = StyleSheet.create({
  container: {
    height: 170,
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
  image: {
    height: '100%',
    justifyContent: 'flex-end'
  },
  title:{
    padding: 5
  }
});

export {images, styles};