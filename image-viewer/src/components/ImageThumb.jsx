function ImageThumb(props) {
    const { thumbnail, isSelected, onClick } = props;
    const path = `./thumbnails/${thumbnail.thumbnail}`;
    
    return (
        // TODO: Recommend to use <div> instead of <a> below
        // eslint-disable-next-line
        <a
            role="button"
            className={isSelected ? "active" : ""}
            onClick={onClick}
        >
            <img
                src={path}
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