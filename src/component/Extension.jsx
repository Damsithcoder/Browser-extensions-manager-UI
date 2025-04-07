import React from "react";

export default function Extension({ id,name, description, image, state,className }) {
    // Create a unique id for the toggle input based on the extension name
    const toggleId = `toggle-btn-${name.replace(/\s/g, "-").toLowerCase()}`;
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
                <button type="button" name="remove" >Remove</button>
                <div className="toggle-btn">
                    <input type="checkbox" id={toggleId} />
                    <label htmlFor={toggleId}></label>
                </div>
            </div>
        </div>
    );
}