import React from "react";
import {View, Flatlist, ScrollView} from "react-native";
import Content from '../components/Content';


const HomeScreen = ({navigation}) =>{
    return(
        <View style = {{flex: 1}}> 
            <ScrollView>
                <Content />
            </ScrollView>
        </View>
    );
}

export default HomeScreen;