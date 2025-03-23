import React, { useState } from "react";

function ImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const [imageUrls, setImageUrls] = useState([]);
    return (
        <div>
            <h2>Image Generator</h2>
        </div>
    );
}

export default ImageGenerator;