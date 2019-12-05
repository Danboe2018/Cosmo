import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Article from '../Article';
import NewsModal from '../NewsModal';
import SmallText from '../SmallText';
import { articles } from '../../lib/data';
import { styles } from './styles';
import * as globals from '../../lib/globals';

export default class NewFeed extends Component {
  state = {
    isNewsModalVisible: false,
    isModalUrl: undefined
  };

  onModalOpen = (url) => {
    this.setState({
      isNewsModalVisible: true,
      isModalUrl: url
    })
  };

  onModalClose = () => {
    this.setState({
      isNewsModalVisible: false,
      isModalUrl: undefined
    })
  };

  render() {
    console.log('This is our state', this.state);
    return (
      <View style={globals.COMMON_STYLES.pageContainer}>
        {
          articles.map((article, index) => {
            return (
              <Article
                key={index}
                date={article.date}
                imageUrl={article.imageUrl}
                title={article.title}
                description={article.description}
                author={article.author}
                index={index}
                onPress={() => this.onModalOpen(article.url)}
                style={styles.newItem}
              />
            )
          })
        }
        <NewsModal
          isNewsModalVisible= {this.state.isNewsModalVisible}
          onModalClose={this.onModalClose}
          isModalUrl={this.state.isModalUrl}
        />
      </View>
    )
  }
};