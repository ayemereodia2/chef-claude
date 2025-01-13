import Markdown from 'react-markdown'

export default function RecipeView(props) {
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
          <h2>Chef Claude Recommends:</h2>
        <Markdown>{props}</Markdown>
      </section>
    )
  }