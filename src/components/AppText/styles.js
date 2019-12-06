import { StyleSheet } from 'react-native';
import * as globals from '../../lib/globals';

const images = {

};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globals.COLORS.HEADER_TEXT_COLOR,
    backgroundColor: '${globals.COLORS.BG_COLOR}99'
  }
});

export { images, styles };