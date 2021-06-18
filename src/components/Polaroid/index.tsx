import React from "react";
interface Props {
    tiltDirection?: string;
    imageUrl: string;
    imageAltText: string;
}

const Polaroid: React.FC<Props> = ({tiltDirection, imageUrl, imageAltText}) => {
    return (
        <figure className={`polaroid ${tiltDirection && tiltDirection === "right" ? "tilt-right" : "tilt-left"}`}>
            <img src={imageUrl} alt={imageAltText}/>
        </figure>
    )
}

export default Polaroid;