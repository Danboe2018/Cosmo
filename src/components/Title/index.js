import React from 'react';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import {styles} from './styles';

const Title = ({children, style}) => {
<AppText style={[style.title, style]}>
  {children}
</AppText>
};

AppText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
};

export default Title;