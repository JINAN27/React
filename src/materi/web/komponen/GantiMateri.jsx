import React, { useState } from 'react';

function GantiMateri() {
    const [str, setStr] = useState(""); 

    return (
        <>
            <p>{str}</p>
            <button onClick={() => setStr("Html")}>Ganti Materi</button>
            <button onClick={() => setStr("Css")}>Ganti Materi Lagi</button>
        </>
    )
}

export default GantiMateri;
