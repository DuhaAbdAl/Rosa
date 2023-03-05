import React, { useState , useEffect , useCallback,  } from "react";
import { StyleSheet } from "react-native";
import {Text, View} from 'react-native';


const ReadMore = (props) => {
    const MIN_LINES = 5 ; 
    const {readMoreStyle, text, textStyle} =props;
    const [showMoreButton, setShowMoreButton] = useState(false);
    const [textShown, setTextShown] = useState(false);
    const [numLines, setNumLines] = useState(undefined);
  
    const toggleTextShown = () => {
      setTextShown(!textShown);
    };
  
    useEffect(() => {
      setNumLines(textShown ? undefined : MIN_LINES);
    }, [textShown]);
  
    const onTextLayout = useCallback(
      (e) => {
        if (e.nativeEvent.lines.length > MIN_LINES && !textShown) {
          setShowMoreButton(true);
          setNumLines(MIN_LINES);
        }
      },
      [textShown],
    );
  
    return (
      <View>
        <Text onTextLayout={onTextLayout} numberOfLines={numLines} 
        style={styles.textStyle} ellipsizeMode="tail">
          {text}
        </Text>
  
        {showMoreButton ? (
          <Text onPress={toggleTextShown} style={styles.ReadButton}>
            {textShown ? '...Read Less' : '... Read More'}
          </Text>
        ) : null}
      </View>
    )
};
const styles = StyleSheet.create ({
  ReadButton:{
    alignSelf: 'flex-end',
    color: 'black',
    marginRight:14,
    fontSize:15,
  },
  textStyle:{
    color:'black',
    fontSize:15,
    // marginRight:10,
  }
})
export default ReadMore;
