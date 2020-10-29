import React, { useState, useCallback, useEffect } from 'react'
import { Search } from 'react-feather';
import tw from 'twin.macro'

const InputContainer = tw.div`m-0 max-w-screen-sm w-full sm:w-80`
const Input = tw.input`flex px-6 w-full max-w-screen-sm py-4 rounded-md font-medium bg-white border border-gray-400 z-20 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`

const ResultsContainer = tw.div`border border-solid border-gray-400 p-1 bg-gray-200 w-full sm:w-88 absolute`
const Result = tw.div`pb-4 hover:bg-white p-4 pr-6`

const Button = tw.div`bg-white`

export const SearchBar = ({ placeholder, Data }) => {
  const [inputValue, setInputValue] = useState('')
  const [output, setOutput] = useState({})

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleSelect(e) {
    setInputValue(e.target.innerHTML)
  }

  const [focus, setFocus] = useState(false)

  function handleFocus() {
    setFocus(true)
  }

  function handleBlur() {
    setFocus(false)
  }


  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      handleBlur()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [])

  return (
    <InputContainer>
      <Input
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleFocus}
        onBlur={handleBlur}
      />
      <Button> 
       <Search size={18}/>
      </Button>

      {inputValue !== '' && focus && (
        <ResultsContainer>
          {Data.map((data, index) => (
            // eslint-disable-next-line react/jsx-key
            <Result id={data.key} onMouseOver={handleSelect}>
              {data.value}
            </Result>
          ))}
        </ResultsContainer>
      )}
    </InputContainer>
  )
}
