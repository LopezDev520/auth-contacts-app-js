import { useState } from "react";

export function useField(type = "text", startingValue = "") {
  const [value, setValue] = useState(startingValue)

  const onChange = evt => setValue(evt.target.value)

  const clear = () => setValue('')

  return {
    type,
    onChange,
    value,
    clear
  }
}