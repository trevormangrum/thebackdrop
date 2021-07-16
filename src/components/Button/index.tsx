import React from "react";

interface Props {
    text: string;
    href?: string;
    onClick?: unknown;
}

const Button: React.FC<Props> = ({ text, href, onClick }) => {
    return (
        <>
            {href && !onClick && (
                <a href={href} className="button">
                    {text}
                </a>
            )}
            {/* If an onClick event is passed in instead of a link, then a button is returned. */}
            {!href && onClick && (
                <button
                    type="button"
                    className="button"
                    onClick={onClick ? onClick : () => {}}
                >
                    {text}
                </button>
            )}
        </>
    );
};

export default Button;
