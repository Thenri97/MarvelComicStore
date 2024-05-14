import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { marvelApi } from '../scripts/api';


export const MarvelContext = createContext();


export const useMarvel = () => useContext(MarvelContext);

export const MarvelProvider = ({ children }) => {
    const [comics, setComics] = useState([]);
    const [newComicList, setNewComicList] = useState([]);

    const hash = import.meta.env.REACT_APP_HASH;
    const apiKey = import.meta.env.REACT_APP_API_KEY;


    useEffect(() => {
        const getCovers = async () => {
            try {
                const { data } = await marvelApi.get("/comics", {
                    params: {
                        ts: 1,
                        apikey: apiKey,
                        hash: hash,
                        offset: 0,
                        limit: 99
                    }
                });
                // console.log(data.data.results);
                setComics(data.data.results);

            } catch (error) {
                console.log(error); // Exibe erros no console
            }
        };


        setTimeout(() => {
            getCovers();
        }, 1000);

    }, []);

    useEffect(() => {

        let minPrice = 10;
        let maxPrice = 100;


        const randomPrice = (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
        const numericPrice = parseFloat(randomPrice);

        
        setNewComicList(comics.map(comic => ({
            price: numericPrice,
            imagem: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            id: comic.id,
            rarity: "common"
        })));

        console.log(newComicList);
    }, [comics])





    return (
        <MarvelContext.Provider value={{ comics, newComicList }}>
            {children}
        </MarvelContext.Provider>
    );
};