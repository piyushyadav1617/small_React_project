import QuoteGenerator from './components/quoteGenerator/quoteGenerator'
import ShoppingList from './components/shoppingList/shoppingList'
import Accordion from './components/accordion/accordion'
import ImageCarousel from './components/imageCarousel/ImageCarousel'
import GithubUserSearch from './components/gihubUserSearch/githubUserSearch'



function App() {


  return (
    <div >

      <ImageCarousel />
      <Accordion />
      <QuoteGenerator />
      <ShoppingList />
      <GithubUserSearch />
    </div>
  )
}

export default App
