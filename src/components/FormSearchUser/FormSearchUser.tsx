import React, { ButtonHTMLAttributes, InputHTMLAttributes, SetStateAction, useState } from "react"

interface Props{
    setInput: React.Dispatch<SetStateAction<string>>;
}


export const FormSearchUser = ({setInput}: Props) => {
    const [inputForm,setInputForm] = useState('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputForm(event.target.value)
      };
    
      const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setInput(inputForm)
      }
      const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setInput(inputForm)
        }
      }
    
    return (
        <>
            <form className="form">
                <label> Nome do usuário</label>
                <input required className="user-input" type="text" name="user-github" onKeyDown={handleKeyDown} onChange={handleInputChange}/>
                <button className="form-btn" type="button" onClick={handleSubmit}> Buscar </button>
            </form>
        </>
    )
}