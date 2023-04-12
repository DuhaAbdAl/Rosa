import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, TextInput } from "react-native";
import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';


const EditProfile = () => {
    const { colors } = useTheme();
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    const renderInner = () =>
    (
        <View style={styles.panel}>
            <View >
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelTitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )


    const renderHeader = () =>
    (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}>

                </View>

            </View>

        </View>
    )


    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <Animated.View style={[styles.animeted,
            opacity = Animated.add(0.3, Animated.multiply(fall, 1.0))
            ]} >
                <View>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <ImageBackground style={styles.imageBackground} source={require('../assets/images/drawer1.jpeg')}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                                    <ImageBackground source={require('../assets/images/profile.jpeg')} style={styles.Profileimg} imageStyle={{ borderRadius: 15 }}>
                                        <View style={styles.cameraWrapper}>
                                            <Feather
                                                name='camera'
                                                size={35}
                                                color={'#fff'}
                                                style={styles.cameraIcon} />
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <Text style={styles.userName}>User</Text>
                            </View>
                            <View style={styles.editBackground}>
                                <MaterialCommunityIcons
                                    name='pencil-outline'
                                    size={25}
                                    color={'#fff'}
                                     />
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </Animated.View >
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    size={25}
                    color={'#333'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder='First Name'
                    placeholderTextColor={'#666666'}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    size={25}
                    color={'#333'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder='Last Name'
                    placeholderTextColor={'#666666'}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.action}>
                <Feather
                    name='phone'
                    size={25}
                    color={'#333'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder='Phone'
                    placeholderTextColor={'#666666'}
                    keyboardType='numper-pad'
                    style={styles.textInput}
                />
            </View>
            <View style={styles.action}>
                <FontAwesome
                    name='envelope-o'
                    size={25}
                    color={'#333'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'#666666'}
                    keyboardType='email-address'
                    style={styles.textInput}
                />
            </View>
            <TouchableOpacity style={styles.commandButton}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        width: '100%',
        height: 270,
    },
    Profileimg: {
        height: 150,
        width: 140,
        borderRadius: 30,
        marginTop: 30,
        alignSelf: 'center',
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'teal',
        alignItems: 'center',
        marginTop: 10,
        margin: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#ffffff',
        paddingTop: 5,
    },
    header: {
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 5,
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
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: 'teal',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
        paddingBottom: 5,
        margin: 20,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: 10,
        paddingLeft: 10,
        color: '#05375a',
    },
    cameraWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraIcon: {
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderRadius: 10,
    },
    animeted: {
        // margin: 20,
    },
    userName: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    icon: {
        marginTop: 18,
        marginLeft: 25
    }, 
    editBackground: {
        marginBottom: 25,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(250,250,250,0.3)',
        height: 40,
        width: 40,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },


})
export default EditProfile;