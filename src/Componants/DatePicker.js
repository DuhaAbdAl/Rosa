import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
            const currendDate = selectedDate;
            setDate(currendDate);
        } else {
            toggleDatePicker()
        }
    };

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
    {
        !showPicker && (
            <Pressable onPress={{ toggleDatePicker }}>
                <TextInput
                    placeholder="Birthday"
                    // keyboardType='numeric'
                    placeholderTextColor={"#fff"}
                    underlineColorAndroid={"#c5e1a5"}
                    style={styles.textInput}
                    editable={false}
                />
            </Pressable>

        )
    }

}