import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, } from "react-native";
import React from "react";
import { data } from "../mokData/data";

const Info = (props) => {
    const { name } = props.route.params || {}
    const found = data.find(element => element.title == name);

    const renderData = () => {
        var keys = Object.keys(found?.info || {});
        return keys.map(key => {
            return (
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>{key || "404"}</Text>
                    <Text style={styles.text}>{found.info[key] || "404"}</Text>
                </View>
            )
        })
    }

    return (
        <ImageBackground style={styles.image} source={require('../assets/images/info1.jpeg')}>
            <ScrollView>
                {renderData()}
            </ScrollView>
        </ImageBackground>
    )

}
const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    textContainer:{
        width: '90%',
        padding:10,
        margin:8,
        marginLeft: 20,
        marginRight: 150,
        borderColor:'#000',
        borderWidth:0.5,
        backgroundColor: 'rgba(10, 10, 10, 0.55)',
    },
    text: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 11,
    },
    text2: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 8,
        paddingTop: 5,
        backgroundColor: '#0c3026',
        height: 40,
        width: '90%',
    },

});

export default Info;
