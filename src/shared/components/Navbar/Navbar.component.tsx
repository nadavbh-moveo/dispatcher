import React, { useState } from 'react'
import appLogoIcon from '../../../assets/svgs/app-logo.svg'
import CustomInput, { INPUT_TYPE } from '../CustomInput/CustomInput.component'

export default function Navbar() {
  const [searchInputValue, setSearchInputValue] = useState('')
  const handleInputChange = (inputValue: string) => {
      setSearchInputValue(inputValue)
  }
  const inputCustomStyles = {border: 'none', background: 'white', borderRadius: '10px', maxHeight: '50px'}
  return (
    <nav className='top-navbar'>
      <div className='actions'>
        <div className='app-logo'>
          <img src={appLogoIcon} alt="" />
        </div>
        <CustomInput label='Search' value={searchInputValue} onChange={(e) => handleInputChange(e.target.value)} type={INPUT_TYPE.SEARCH} customStyles={inputCustomStyles}/>
      </div>
    </nav>
  )
}
