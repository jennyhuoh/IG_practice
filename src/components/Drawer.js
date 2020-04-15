import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const Drawer = () =>{
    return(
        <View>
            <View style = {styles.sec1}>
                <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/people/img_kuan880324.png"}}/>
                <View>
                    <Text style = {styles.name}>_kuan0324</Text>
                    <Text style = {styles.words}>3小時前上線</Text>
                </View>
            </View>
            <View style = {styles.sec1}>
                <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/people/img_kuan880324.png"}}/>
                <View>
                    <Text style = {styles.name}>_kuan0324</Text>
                    <Text style = {styles.words}>3小時前上線</Text>
                </View>
            </View>
            <View style = {styles.sec1}>
                <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/people/img_kuan880324.png"}}/>
                <View>
                    <Text style = {styles.name}>_kuan0324</Text>
                    <Text style = {styles.words}>3小時前上線</Text>
                </View>
            </View>
            <View style = {styles.sec1}>
                <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/people/img_kuan880324.png"}}/>
                <View>
                    <Text style = {styles.name}>_kuan0324</Text>
                    <Text style = {styles.words}>3小時前上線</Text>
                </View>
            </View>
            <View style = {styles.sec1}>
                <Image source = {{uri:"https://github.com/jennyhuoh/IG_practice/blob/master/assets/people/img_kuan880324.png"}}/>
                <View>
                    <Text style = {styles.name}>_kuan0324</Text>
                    <Text style = {styles.words}>3小時前上線</Text>
                </View>
            </View>

        </View>
    );
}