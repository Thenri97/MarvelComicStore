import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { marvelApi } from '../scripts/api';


export const MarvelContext = createContext();


export const useMarvel = () => useContext(MarvelContext);

export const MarvelProvider = ({ children }) => {
    const [comics, setComics] = useState([]);
    const [newComicList,setNewComicList] = useState([]);
    

    useEffect(() => {
        const getCovers = async () => {
            try {
                const { data } = await marvelApi.get("/comics", {
                    params: {
                        ts: 1,
                        apikey: 'f08e1dad392af459458fd0ce81c909f6',
                        hash: 'f299223d8ece7d3de4e41a1cac9f8a48',
                        offset: 0,
                        limit: 10
                    }
                });
                // console.log(data.data.results);
                setComics(data.data.results);

            } catch (error) {
                console.log(error); // Exibe erros no console
            }
        };


        getCovers();

    }, []);

    useEffect(() => {

        let minPrice = 9.99;
        let maxPrice = 99.99;

    
        
        setNewComicList(comics.map(comic => ({
            imagem: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            id: comic.id,
            price:(Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2),
            rarity: "common"
        })));
        
        console.log(newComicList);
    },[comics])



   

    return (
        <MarvelContext.Provider value={{ comics,newComicList}}>
            {children}
        </MarvelContext.Provider>
    );
};