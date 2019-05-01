import { useState } from 'react'

export default initial => {
  const [state, setState] = useState(initial);
  const toggle = () => setState(s=>!s)
  return [state, toggle]
}
