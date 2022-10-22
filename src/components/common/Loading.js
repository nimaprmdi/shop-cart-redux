import React from "react";
import spinner from "../../assets/images/spinner.svg";

const Loading = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img src={spinner} alt="loading..." />
        </div>
    );
};

export default Loading;
