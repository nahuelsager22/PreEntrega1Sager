import React from "react"
const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className="itemListContainer">
                {greeting}
            </div>
        </>
    )
}

export { ItemListContainer }