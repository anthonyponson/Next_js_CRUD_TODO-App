'use client'
import { useState } from 'react'

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <>
      <div>
        <input type='checkbox' onChange={handleChange} checked={isChecked} />
      </div>
    </>
  )
}

export default CheckBox
