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
    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [myPlants, setMyPlants] = useState([]);



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
                setSearchText,
                isLoading,
                setIsLoading,
                isData,
                setIsData,
                error, 
                setError,
                fullData,
                setFullData,
                searchQuery,
                setSearchQuery,
                myPlants,
                setMyPlants
            }}>
            {props.children}
        </RosaContext.Provider>
    );
};

export default RosaProvider;