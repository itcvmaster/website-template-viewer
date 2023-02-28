function ImageThumb(props) {
    const { thumbnail, isSelected, onClick } = props;
    return (
        <a 
            className={isSelected ? "active" : ""}
            onClick={onClick}
        >
            <img
                src={"./thumbnails/" + thumbnail.thumbnail}
                alt={thumbnail.thumbnail}
                className={isSelected ? "active" : ""}
            />

            <span>
                {thumbnail.image}
            </span>
        </a>
    )
}

export default ImageThumb;