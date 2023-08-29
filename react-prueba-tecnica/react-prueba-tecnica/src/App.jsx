import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red/cat&json=true`

export function App () {
  const [fact, setfact] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setfact(fact)

        const threeFirstWords = fact.split(' ', 3)
        
        fetch(CAT_ENDPOINT_IMAGE_URL)
          .then(res => res.json())
          .then(response => {})
      })
  }, [])

  return (
    <main>
      <h1>Hola gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
