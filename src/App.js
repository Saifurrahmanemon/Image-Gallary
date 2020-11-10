import { data, process } from "autoprefixer";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
    const [images, setImage] = useState([]);
    const [isLoading, setIsloading] = useState([]);
    const [term, setTerm] = useState("cats");

    const api = "14345106-1d40a38d09468e8dd3aa4c4c1&q";

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${api}=${term}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                setImage(data.hits);
                setIsloading(false);
            })
            .catch((err) => console.log(err),[term]);
    });
    return (
        <div className="container mx-auto">
            <Search searchText={(text) => setTerm(text)} />
            {!isLoading && images.length === 0 && (
                <h1 className="text-5xl text-center mx-auto mt-32">
                     No Images found!
                </h1>
            )}
            {isLoading ? (
                <h1 className="text-6xl text-center mx-auto mt-32">
                    Loading.............
                </h1>
            ) : (
                <div className="grid grid-cols-3 gap-3">
                    {images.map((image) => (
                        <Card key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
