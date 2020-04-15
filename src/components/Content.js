import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const Content = () => {
    return(
        <View>
            <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/article/img_home_article1.png"}}/>
            <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/article/img_home_article2.png"}}/>
            <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/article/img_home_article3.png"}}/>
        </View>
    );
}

export default Content;