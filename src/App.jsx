import { useState } from 'react'
import Rating from './components/Rating'
import Thanks from './components/Thanks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="rating-container">
      {/* <Rating /> */}
<Thanks rating={count}/>

    </div>
  )
}

export default App
