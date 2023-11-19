import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Pressable, TextInput, TouchableOpacity, ActivityIndicator, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
// import { images } from '../mokData/data';
import DropdownComponent from '../Componants/DropDown';
import { addMyPlant } from '../../API/Api';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddPlants = () => {
    const [MyPlant, setMyPlant] = useState([])
    const [loding, setLoading] = useState(false)
    const [FullName, setFullName] = useState("");
    const [Category, setCategory] = useState("");
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [FormReady, setFormReady] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === "android") {
                toggleDatePicker();
                setDateOfBirth(currentDate.toDateString());
            }
        } else {
            toggleDatePicker()
        }
    }
    const onSubmit = () => {
        alert(`${FullName}  ${DateOfBirth}`)
        addMyPlantFromApi
    };
    useEffect(() => {
        setFormReady(FullName  && DateOfBirth);

        return () => {
            setFormReady(false)
        }
    }, [FullName,  DateOfBirth])


    const addMyPlantFromApi = () => {
        setLoading(true)
        addMyPlant().then(res => {
            setLoading(false)
            console.log("res: ", res);
            res &&
                setMyPlant(res?.all)
        })
    }

    useEffect(() => {
        addMyPlantFromApi()
    }, [])


    if (loding) {
        return <ActivityIndicator size={'large'} style={{ flex: 1 }} />
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboatdVerticalOffset={10}
            >
                <View style={styles.contentContainer}>
                {/* <ScrollView
                    showsVerticalScrollIndicatoe={false}
                    contentContainerStyle={styles.contentContainer}
                > */}
                    <Image style={styles.image} source={require('../assets/images/BellaGomez.jpeg')} />

                    <View>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Plant Name"
                            value={FullName}
                            onChangeText={setFullName}
                            placeholderTextColor="#11182744"
                            />
                    </View>
                    <View>
    
                            <Text style={styles.label}>Category</Text>
                            <DropdownComponent/>
                            {/* <TextInput
                                style={styles.input}
                                placeholder="Select Category"
                                // value={Category}
                                onChangeText={setCategory}
                                placeholderTextColor="#11182744"
                            /> */}
                      
                    </View>
                    <View>
                        {
                            showPicker && (
                                <DateTimePicker
                                    mode="date"
                                    display="spinner"
                                    value={date}
                                    onChange={onChange}
                                />
                            )
                        }
                        <Text style={styles.label}>Date Of Birth</Text>
                        {
                            !showPicker && (
                                <Pressable onPress={(toggleDatePicker)}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='mon Aug 1 2000'
                                        value={DateOfBirth}
                                        onChangeText={setDateOfBirth}
                                        placeholderTextColor="#11182744"
                                        editable={false}
                                    />
                                </Pressable>

                            )
                        }


                    </View>
                    <TouchableOpacity
                        style={[styles.button,
                        { backgroundColor: FormReady ? "#c5e1a5" : "#11182711" }
                        ]}
                        disabled={!FormReady}
                        onPress={onSubmit}
                    >
                        <Text
                            style={[styles.buttonText,
                            { color: FormReady ? "#fff" : "#11182766" }]}
                        >
                            Add Plant
                        </Text>

                    </TouchableOpacity>
                {/* </ScrollView> */}
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9fafb",
    },
    contentContainer: {
        padding: 20,
    },
    moto: {
        fontWeight: "500",
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center",
        color: "#111827cc",
    },
    label: {
        fontSize: 13,
        fontWeight: "500",
        marginBottom: 10,
        color: "#111827cc",
    },
    input: {
        backgroundColor: "transparent",
        height: 50,
        fontSize: 14,
        fontWeight: "500",
        color: "#111827cc",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#11182711",
        paddingHorizontal: 20,
        marginBottom: 20,
        borderColor: "#c5e1a5",
    },
    button: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginBottom: 15,
        backgroundColor: "#075985",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
    },
    textInput: {
        color: '#fff',
        margin: 10,
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 15,
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 15,
    },
});
export default AddPlants;