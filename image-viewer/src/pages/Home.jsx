import { useEffect, useState } from "react";

import TestApi from "api";
import MainImage from "components/MainImage";
import ImageThumb from "components/ImageThumb";

export function Home() {
    const MAX_THUMBS = 4;
    const [selectedThumb, setSelectThumb] = useState();
    const [imageCount, setImageCount] = useState(0);
    const [thumbnails, setThumbnails] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(MAX_THUMBS);
    const [getImagesQuery] = TestApi.useLazyGetImagesQuery();

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