import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  // Efecto para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  // para recuperar la cita al cargar
  return { fact, refreshFact }
}
