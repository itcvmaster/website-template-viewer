import { useEffect, useState } from "react";

import MainImage from "./MainImage";
import ImageThumb from "./ImageThumb";
const imageJson = [
    {
        "title": "Business Site Template - 7111",
        "cost": "45.00",
        "id": "7111",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
        "thumbnail": "7111-m.jpg",
        "image": "7111-b.jpg"
    },
    {
        "title": "Business Site Template - 7112",
        "cost": "55.00",
        "id": "7112",
        "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
        "thumbnail": "7112-m.jpg",
        "image": "7112-b.jpg"
    },
    {
        "title": "Business Site Template - 7118",
        "cost": "65.00",
        "id": "7118",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
        "thumbnail": "7118-m.jpg",
        "image": "7118-b.jpg"
    },
    {
        "title": "Business Site Template - 7124",
        "cost": "55.00",
        "id": "7124",
        "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
        "thumbnail": "7124-m.jpg",
        "image": "7124-b.jpg"
    },
    {
        "title": "Business Site Template - 7130",
        "cost": "45.00",
        "id": "7130",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
        "thumbnail": "7130-m.jpg",
        "image": "7130-b.jpg"
    },
    {
        "title": "Business Site Template - 7131",
        "cost": "55.00",
        "id": "7131",
        "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
        "thumbnail": "7131-m.jpg",
        "image": "7131-b.jpg"
    },
    {
        "title": "Business Site Template - 7141",
        "cost": "65.00",
        "id": "7141",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
        "thumbnail": "7141-m.jpg",
        "image": "7141-b.jpg"
    },
    {
        "title": "Business Site Template - 7143",
        "cost": "35.00",
        "id": "7143",
        "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
        "thumbnail": "7143-m.jpg",
        "image": "7143-b.jpg"
    },
    {
        "title": "Business Site Template - 7147",
        "cost": "47.00",
        "id": "7147",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.",
        "thumbnail": "7147-m.jpg",
        "image": "7147-b.jpg"
    },
    {
        "title": "Business Site Template - 7150",
        "cost": "53.00",
        "id": "7150",
        "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
        "thumbnail": "7150-m.jpg",
        "image": "7150-b.jpg"
    },
    {
        "title": "Business Site Template - 7152",
        "cost": "62.00",
        "id": "7152",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.",
        "thumbnail": "7152-m.jpg",
        "image": "7152-b.jpg"
    },
    {
        "title": "Business Site Template - 7155",
        "cost": "60.00",
        "id": "7155",
        "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
        "thumbnail": "7155-m.jpg",
        "image": "7155-b.jpg"
    },
    {
        "title": "Business Site Template - 7160",
        "cost": "47.00",
        "id": "7160",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.",
        "thumbnail": "7160-m.jpg",
        "image": "7160-b.jpg"
    },
    {
        "title": "Business Site Template - 7162",
        "cost": "42.00",
        "id": "7162",
        "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
        "thumbnail": "7162-m.jpg",
        "image": "7162-b.jpg"
    },
    {
        "title": "Business Site Template - 7164",
        "cost": "67.00",
        "id": "7164",
        "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis.",
        "thumbnail": "7164-m.jpg",
        "image": "7164-b.jpg"
    }
];

function FilmStrip() {
    const MAX_THUMBS = 4;
    const [selectedThumb, setSelectThumb] = useState();
    const [imageCount, setImageCount] = useState(0);
    const [thumbnails, setThumbnails] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    useEffect(() => {
        setImageCount(imageJson.length);
        if (imageJson.length > 0) {
            setStart(0);
            setEnd(Math.min(MAX_THUMBS, imageJson.length));
        }
    }, []);

    useEffect(() => {
        setThumbnails(imageJson.slice(start, end));
    }, [start, end]);

    const handlePrev = () => {
        console.log(start, end);
        if (start > 0) {
            const s = Math.max(0, start - MAX_THUMBS);
            const e = Math.min(imageCount, s + MAX_THUMBS);
            setStart(s);
            setEnd(e);
        }
    };

    const handleNext = () => {
        if (end < imageCount) {
            const e = Math.min(imageCount, end + MAX_THUMBS);
            const s = Math.max(0, e - MAX_THUMBS);
            setStart(s);
            setEnd(e);
        }
    };

    return (
        <div id="container">
            <MainImage
                selectedThumb={selectedThumb}
            />

            <div className="thumbnails">
                <button
                    className={"previous" + (start <= 0 ? " disabled" : "")}
                    onClick={handlePrev}
                />
                {thumbnails.map((thumbnail, index) => (
                    <ImageThumb
                        key={index}
                        thumbnail={thumbnail}
                        isSelected={selectedThumb?.id === thumbnail?.id}
                        onClick={() => setSelectThumb(thumbnail)}
                    />
                ))}
                <button
                    className={"next" + (end >= imageCount ? " disabled" : "")}
                    onClick={handleNext}
                />
            </div>

        </div>
    )
}

export default FilmStrip;