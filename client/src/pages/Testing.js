import React, { useState } from 'react'

const Testing = () => {

    const handleReset = () => {
        setAdd(0)
    }

    const [add, setAdd] = useState(0)
    return (
        <div style={{ display: "flex", flexDirection:"column" }}>
            <div>
                tambah
                <button onClick={() => setAdd(add + 1)}>tambah</button>
                <button onClick={()=> setAdd(add < 1 ? null :  add-1)}>Kurang</button>
            <h1>hasil {add}</h1>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Testing