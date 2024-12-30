export default function List() {
    const ingredients = [
        "Chicken breasts",
        "Most of the main spices",
        "Olive oil",
        "Heavy cream",
        "Chicken broth",
        "Parmesan cheese",
        "Spinach"
    ]

    const itemList = ingredients.map((item, index) => {
        return <li key={index} className="list-item-view">{ item }</li>
    })

    return (
        <section className="list-section-view">
            <div>
                <p>Ingredients on hand:</p>
                <ul>
                    { itemList }
                </ul>
            </div>
        </section>
    )
}