import React, { useState } from 'react';
import RosaContext from './RosaContext';

const RosaProvider = props => {
    const [favorates, setFavoratis] = useState([]);
    const [showMoreButton, setShowMoreButton] = useState(false);
    const [textShown, setTextShown] = useState(false);
    const [numLines, setNumLines] = useState(undefined);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [Data, setData] = useState();
    const [input, setInput] = useState("");
    const [searchText, setSearchText] = useState([]);


    return (
        <RosaContext.Provider
            value={{
                favorates,
                setFavoratis,
                showMoreButton,
                setShowMoreButton,
                textShown,
                setTextShown,
                numLines,
                setNumLines,
                searchPhrase,
                setSearchPhrase,
                clicked,
                setClicked,
                Data,
                setData,
                input,
                setInput,
                searchText,
                setSearchText
            }}>
            {props.children}
        </RosaContext.Provider>
    );
};

export default RosaProvider;