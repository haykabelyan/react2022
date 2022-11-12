import {useState, useEffect} from 'react'


// vor amen agnam serverin harcum chgna,
// gna inch vor promijutoky mek

export function useDebounce<T>(value: T, delay: number = 200): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value])

  return debouncedValue
}