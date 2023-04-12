import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground, ScrollView, Image } from "react-native";
import React from "react";
 

const EditProfile = () => {

   const bs = React.createRef();
   const fall = new Animated.Value(1);
   const renderInner = () => {

   }
   const renderHeader = () => {
    <View style={styles.header}>
        <View style={styles.panelHeader}>
            <View style={styles.panelHandle}>

            </View>

        </View>

    </View>
   }

    return (
        <ImageBackground source={require('../assets/images/profile.jpeg')} style={styles.Profileimg}>

            <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={renderInner()}
            renderHeader={renderHeader()}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
            />
        </ImageBackground>

    )
}
const styles = StyleSheet.create ({
    header: {
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation:5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    }

})