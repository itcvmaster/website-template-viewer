const FALLBACK_URL = "./no_image.jpeg";

function MainImage(props) {
    const { selectedThumb } = props;
    const path = `./large/${selectedThumb?.image}`;
    return (
        <div id="large">
            <img
                src={path}
                alt={selectedThumb?.thumbnail}
                loading="lazy"
                onError={(e) => {
                    e.onerror = null;
                    e.target.src = FALLBACK_URL;
                }}
            />

            <div className="details">
                {selectedThumb && Object.keys(selectedThumb).map((field) => (
                   <>
                    <strong key={field.id}> {field} </strong>
                    <p key={field.id}> {selectedThumb[field] || "N/A"} </p>
                   </> 
                ))}
            </div>
        </div>
    )
}

export default MainImage;