import React, { useState } from "react";
import {Text, View} from 'react-native';


const ReadMore = (props) => {
    // const text = Info();
    // const [isReadMore, setIsReadMore] = useState(true);
    // // const toggleReadMore = () => {
    // //     setIsReadMore(!isReadMore);
    // // };
    // return (
    //     <View>
    //         {isReadMore ? text.slice(0, 150) : text}
    //         {/* <Text
    //             numberOfLines={2}
    //             onTextLayout={(e) => setIsReadMore(e.nativeEvent.lines.length > 2)}>
    //             {text}</Text> */}
    //         {isReadMore && (
    //             <Text style={{ color: 'green' }} onPress={() => {
    //             }}> Read More... </Text>)}
   
    //     </View>
    // )
    const {readMoreStyle, text, textStyle} =props;
    const [showMoreButton, setShowMoreButton] = useState(false);
    const [textShown, setTextShown] = useState(false);
    const [numLines, setNumLines] = useState(undefined);
  
    const toggleTextShown = () => {
      setTextShown(!textShown);
    };
  
    useEffect(() => {
      setNumLines(textShown ? undefined : 3);
    }, [textShown]);
  
    const onTextLayout = useCallback(
      (e) => {
        if (e.nativeEvent.lines.length > 3 && !textShown) {
          setShowMoreButton(true);
          setNumLines(3);
        }
      },
      [textShown],
    );
  
    return (
      <View>
        <Text onTextLayout={onTextLayout} numberOfLines={numLines} 
        style={textStyle} ellipsizeMode="tail">
          {text}
        </Text>
  
        {showMoreButton ? (
          <Text onPress={toggleTextShown} style={readMoreStyle}>
            {textShown ? 'Read Less' : 'Read More'}
          </Text>
        ) : null}
      </View>
    )
}
export default ReadMore;
