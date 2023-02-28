const FALLBACK_URL = "./no_image.jpeg";
function MainImage(props) {
    const { selectedThumb } = props;
    return (
        <div id="large">
            <img
                src={"./large/" + selectedThumb?.image}
                alt={selectedThumb?.thumbnail}
                loading="lazy"
                onError={(e) => {
                    e.onerror = null;
                    e.target.src = FALLBACK_URL;
                }}
            />
            <div className="details">
                <strong> ID </strong>
                <p> {selectedThumb?.id || "N/A"} </p>

                <strong> Title </strong>
                <p> {selectedThumb?.title || "N/A"} </p>

                <strong> Cost </strong>
                <p> {selectedThumb?.cost || "N/A"} </p>

                <strong> Description </strong>
                <p> {selectedThumb?.description || "N/A"} </p>

                <strong> Thumbnail File Name </strong>
                <p> {selectedThumb?.thumbnail || "N/A"} </p>

                <strong> Image File Name </strong>
                <p> {selectedThumb?.image || "N/A"} </p>
            </div>
        </div>
    )
}

export default MainImage;