import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const Content = () => {
    return(
        <View style = {styles.articlecontainer}>
            <Image style = {styles.article} source = {require('../../assets/article/img_home_article1.png')}/>
            <Image style = {styles.article2} source = {require('../../assets/article/img_home_article2.png')}/>
            <Image style = {styles.article2} source = {require('../../assets/article/img_home_article3.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    articlecontainer: {
        backgroundColor: '#fff'
    },
    article: {
        marginTop: -263,
        width: 375,
        alignItems: 'center',
        resizeMode: 'contain'
    },
    article2: {
        marginTop: -520,
        marginLeft: -0.9,
        width: 375,
        alignItems: 'center',
        resizeMode: 'contain'
    }
  });

export default Content;