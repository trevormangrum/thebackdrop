import React from "react";

interface Props {
    text: string;
    href?: string;
    onClick?: unknown;
    isDisabled?: boolean;
}

const Button: React.FC<Props> = ({ text, href, onClick, isDisabled }) => {
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
                    disabled={isDisabled ? true : false}
                >
                    {text}
                </button>
            )}
        </>
    );
};

export default Button;
