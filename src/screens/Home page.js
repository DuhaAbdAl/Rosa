import { ImageBackground, StyleSheet, Text, View, Button, Pressable } from "react-native";
import React from "react";
import { ScreenName } from "../../route/ScreenName";

export default function HomePage(props) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.image} source={require('../assets/images/GreenRose.jpeg')}>

                <Text style={styles.text2}>Rosa Verde</Text>

                <Text style={styles.text}>{`
                   "There is a language, 'little known'\n,
                    Lovers claim it as their own.\n
                    Its symbols smile upon the land,\n
                    Wrought by Natures wonderous hand;\n
                    And in their silent beauty speak, Of life and joy,\n
                    to those who seek\n
                    For Love Divine and sunny hours\n
                    In the language of the flowers".\n

                     -The language of flowers london 1875`}
                </Text>
                <Pressable style={styles.button} onPress={() => {
                    props.navigation.navigate(ScreenName.Types);
                }}>
                    <Text style={styles.text3}>Arrow</Text>
                </Pressable>

            </ImageBackground>
            {/* <Button style={styles.button} title='Next'
                onPress={() => {
                    props.navigation.navigate(ScreenName.Types);
                }}></Button>*/}

        </View>
    )
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: 'white',
        textAlign: "left",
        paddingTop: 30,
        marginBottom: 200,
        lineHeight: 10,

    },
    text2: {
        fontWeight: 'bold',
        fontSize: 30,
        padding: 20,
        color: 'green',
        textAlign: 'center',
        marginBottom: 110,
    },
    text3: {
        fontSize: 16,
        color: '#228C22',
    },
    button: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: 'transparent'
    },
});