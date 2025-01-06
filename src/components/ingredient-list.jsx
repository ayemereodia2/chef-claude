export default function List({newItem}) {

    const itemList = newItem.map((item, index) => {
        return <li key={index} className="list-item-view">{ item }</li>
    })

    return (
        <section className="list-section-view">
            <div>
                { newItem.length > 0 ? <p>Ingredients on hand:</p> : null }
                <ul>
                    { itemList }
                </ul>
            </div>
        </section>
    )
}


   // "Chicken breasts",
        // "Most of the main spices",
        // "Olive oil",
        // "Heavy cream",
        // "Chicken broth",
        // "Parmesan cheese",
        // "Spinach"