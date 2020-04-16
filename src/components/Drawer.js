import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { apisAreAvailable } from 'expo';
import DrawerList from "../DrawerList.json"

const Drawer = () =>{
    return(
        <ScrollView style = {styles.drawercontainer}>
            <View style = {styles.sec1}>
                <Image style = {styles.person} source = {require('../../assets/people/img_kuan880324.png')}/>
                <View style = {styles.wordscontent}>
                    <Text style = {styles.name}>{DrawerList[0].name}</Text>
                    <Text style = {styles.words}>{DrawerList[0].words}</Text>
                </View>
                <Image style = {styles.drawercamera} source = {require('../../assets/icon&btn/btn_drawer_camera.png')}/>
            </View>
            <View style = {styles.sec1}>
                <Image style = {styles.person} source = {require('../../assets/people/img_hhuoh.png')}/>
                <View style = {styles.wordscontent2}>
                    <Text style = {styles.name}>{DrawerList[1].name}</Text>
                    <Text style = {styles.words}>{DrawerList[1].words}</Text>
                </View>
                <Image style = {styles.drawercamera2} source = {require('../../assets/icon&btn/btn_drawer_camera.png')}/>
            </View>
            <View style = {styles.sec1}>
                <Image style = {styles.person3} source = {require('../../assets/people/img_chanhan.png')}/>
                <View style = {styles.wordscontent3}>
                    <Text style = {styles.name}>{DrawerList[2].name}</Text>
                    <Text style = {styles.words}>{DrawerList[2].words}</Text>
                </View>
                <Image style = {styles.drawercamera3} source = {require('../../assets/icon&btn/btn_drawer_camera.png')}/>
            </View>
            <View style = {styles.sec1}>
                <Image style = {styles.person4} source = {require('../../assets/people/img_chloe.lia.png')}/>
                <View style = {styles.wordscontent4}>
                    <Text style = {styles.name}>{DrawerList[3].name}</Text>
                    <Text style = {styles.words}>{DrawerList[3].words}</Text>
                </View>
                <Image style = {styles.drawercamera4} source = {require('../../assets/icon&btn/btn_drawer_camera.png')}/>
            </View>
            <View style = {styles.sec1}>
                <Image style = {styles.person} source = {require('../../assets/people/img_yuhsuanya.png')}/>
                <View style = {styles.wordscontent}>
                    <Text style = {styles.name}>{DrawerList[4].name}</Text>
                    <Text style = {styles.words}>{DrawerList[4].words}</Text>
                </View>
                <Image style = {styles.drawercamera5} source = {require('../../assets/icon&btn/btn_drawer_camera.png')}/>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    drawercontainer: {
        backgroundColor: '#fff'
    },
    sec1: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 73,
    },
    person: {
        height: 60,
        resizeMode: 'contain',
        marginLeft: -45,
        marginTop: 10
    },
    wordscontent: {
        marginLeft: -50,
        marginTop: 22
    },
    words: {
        marginTop: 5,
        color: '#757575'
    },
    drawercamera: {
        height: 27,
        resizeMode: 'contain',
        marginTop: 29,
        marginLeft: 146
    },
    drawercamera2: {
        height: 27,
        resizeMode: 'contain',
        marginTop: 29,
        marginLeft: 76
    },
    wordscontent2: {
        marginLeft: -45,
        marginTop: 22
    },
    person3: {
        height: 60,
        resizeMode: 'contain',
        marginLeft: -51,
        marginTop: 10
    },
    wordscontent3: {
        marginLeft: -55,
        marginTop: 22
    },
    drawercamera3: {
        height: 27,
        resizeMode: 'contain',
        marginTop: 29,
        marginLeft: 141
    },
    person4: {
        height: 60,
        resizeMode: 'contain',
        marginLeft: -57,
        marginTop: 10
    },
    wordscontent4: {
        marginLeft: -60,
        marginTop: 22
    },
    drawercamera4: {
        height: 27,
        resizeMode: 'contain',
        marginTop: 29,
        marginLeft: 149
    },
    drawercamera5: {
        height: 27,
        resizeMode: 'contain',
        marginTop: 29,
        marginLeft: 148
    },
})

export default Drawer;