import React, { useEffect, useState } from 'react'
import CardComic from './CardComic';

const MarvelPrueba = () => {

//let publicKey = "11c8d4b61cc1cff00d37f27fb266568f"
//let privateKey = "dec81fc7ce4abe390810e3ba0b65f17354523a7c"
//1dec81fc7ce4abe390810e3ba0b65f17354523a7c11c8d4b61cc1cff00d37f27fb266568f
// MD5 Hash: 90f8c88603bfa6250792bfcf86f04956
// ts: 1

const [comicList, setComicList] = useState(null); 

useEffect(() => {
    fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=11c8d4b61cc1cff00d37f27fb266568f&hash=90f8c88603bfa6250792bfcf86f04956')
        .then((res) => res.json())
        .then((data) => {
            setComicList(data.data.results);
        })
        .catch((err) => console.log(err))
}, [])

console.log(comicList)

  return (
    <div>
        {comicList.map((comic, index) => {return <CardComic comic={comic} key={index}/>})}
    </div>
    
  )
}

export default MarvelPrueba