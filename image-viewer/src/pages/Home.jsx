import { useEffect, useState } from "react";

import TestApi from "api";
import MainImage from "components/MainImage";
import ImageThumb from "components/ImageThumb";

export function Home() {
    const MAX_THUMBS = 4;
    const [selectedThumb, setSelectThumb] = useState();
    const [imageCount, setImageCount] = useState(0);
    const [thumbnails, setThumbnails] = useState([]);
    const [title, setTitle] = useState("");
    const [cost, setCost] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [thumb, setThumb] = useState("");

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(MAX_THUMBS);
    const [getImagesQuery] = TestApi.useLazyGetImagesQuery();
    const [addField] = TestApi.useAddFieldMutation();

    useEffect(() => {
        getImagesQuery({
            params: {
                start: start,
                end: end
            }
        }, true).unwrap().then((result) => {
            if (result.isError) {
                return;
            }
            setImageCount(result.total);
            setThumbnails(result.images);
            if (result.images.length > 0 && !selectedThumb) {
                setSelectThumb(result.images[0]);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, end]);

    const handlePrev = () => {
        if (start > 0) {
            const s = Math.max(0, start - MAX_THUMBS);
            const e = Math.min(imageCount, s + MAX_THUMBS);
            setStart(s);
            setEnd(e);
        }
    };

    const handleNext = () => {
        if (end < imageCount) {
            const s = Math.max(0, start + MAX_THUMBS);
            const e = Math.min(imageCount, s + MAX_THUMBS);
            setStart(s);
            setEnd(e);
        }
    };

    const handleAdd = async () => {
        await addField({
            title: title,
            cost: cost,
            description: desc,
            image: image,
            thumbnail: thumb
        }).unwrap().then((result) => {
            if (result.isError) {
                return;
            }
            // const newImages = [...thumbnails, result];
            // setThumbnails(newImages);
            setSelectThumb(result);
            // setImageCount(imageCount+1);
        });
    }

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

            <div className="">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="A New Ttitle"
                />
                <input
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="A New Cost"
                />
                <input
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="A New Description"
                />
                <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="A New Image"
                />
                <input
                    value={thumb}
                    onChange={(e) => setThumb(e.target.value)}
                    placeholder="A New Thumbnail"
                />
                <button
                    onClick={handleAdd}
                >
                    Add Thumbnail
                </button>

            </div>
        </div>
    )
}