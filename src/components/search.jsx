export default function Search() {
    const handleSubmission = () => {
        console.log("Form submitted!");
    }

 return (
    <main>
        <form action="" className="add-ingredient-form" onSubmit={handleSubmission} >
            <input 
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            />
            <button className="btn-search">Add ingredient</button>
        </form>
    </main>
 )
}