import React from 'react';
import Proptypes from 'prop-types';
import {View} from 'react-native';
import SmallText from '../SmallText';
import {styles} from './styles';

const Byline = ({date, author}) => {
  return (
    <View>
      <View style={styles.row}>
        <SmallText>
          {date.toLocalString()}
        </SmallText>
        <SmallText>
          {author}
        </SmallText>
      </View>
    </View>
  )
};

Byline.propTypes = {
  date: Proptypes.instanceOf(Date).isRequired,
  author: Proptypes.string.isRequired,
};

export default Byline;