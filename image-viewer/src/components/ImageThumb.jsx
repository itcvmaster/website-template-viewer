function ImageThumb(props) {
    const { thumbnail, isSelected, onClick } = props;
    return (
        // eslint-disable-next-line
        <a
            role="button"
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