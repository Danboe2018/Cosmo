import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Article from '../Article';
import SmallText from '../SmallText';
import {articles} from '../../lib/data';
import {styles} from './styles';
import * as globals from '../../lib/globals';

export default class NewFeed extends Component {
  render() {
    return (
      <View style={globals.COMMON_STYLES.pageContainer}>
        {
          articles.map((article, index) => {
            return(
              <Article 
              key={index}
              date={article.date}
              imageUrl={article.imageUrl}
              title={article.title}
              description={article.description}
              author={article.author}
              index={index}
              onPress={() => {}}
              style={styles.newItem}
              />
            )
          });
        }
      </View>
    )
  }
};