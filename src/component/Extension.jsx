import React, { useState,useEffect } from "react";

export default function Extension({ key, name, description, image, options, className }) {
    // Create a unique id for the toggle input based on the extension id or name
    const [isToggled, setIsToggled] = useState(options);
    useEffect(() => {
        setIsToggled(!isToggled)
    },[options]
)

    return (
        <div className={className}>
            <div className="content">
                <div className="extension-image">
                    <img src={image} className="logo react" alt="React logo" />
                </div>
                <div className="extension-details">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>

            <div className="options">
                <button type="button" name="remove">Remove</button>
                <div className="toggle-btn">
                    <input
                        type="checkbox"
                        id={key}
                        className="checkbox"
                        checked={!isToggled}
                    />
                    <label htmlFor={key} className="label">
                    
                    </label>
                </div>
                {/* <b+utton type="button" className="btn btn-toggle" data-toggle="button" >
                    <div className="handle"></div>
                </button> */}
            </div>
        </div>
    );
}