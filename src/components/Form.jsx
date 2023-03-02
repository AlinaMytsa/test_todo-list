import React, {useState} from "react";

const Form = ({addTask}) => {
  const [title, setTitle] = useState({titleValue: '', isTitleValid: true})
  const [description, setDescription] = useState({deskValue: '', isValueValid: true})
  const [invalidInputs, setInvalidInputs] = useState([]);

  const handleTitleChange = (e) => {
    const initialTitleValue = e.target.value;
    if (!initialTitleValue) {
      setTitle({titleValue: '', isTitleValid: false})
    } else {
      setTitle({titleValue: initialTitleValue, isTitleValid: true})
    }
    return initialTitleValue
  }

  const handleDescChange = (e) =>{
    const initialDescValue = e.target.value
    if (!initialDescValue){
      setDescription({deskValue: '', isValueValid: false})
    } else {
      setDescription({deskValue: initialDescValue, isValueValid: true})
    }
    return initialDescValue
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.titleValue.trim() === '' || description.deskValue.trim() === ''){
      throw new Error('This field is empty.')
    }else {
      addTask(title.titleValue, description.deskValue);
      setTitle({titleValue: '', isTitleValid: true})
      setDescription({deskValue: '', isValueValid: true});
    }
  }

  const handleButtonClick = () => {
    const invalidInputsArray = [];

    if (title.titleValue === '') {
      invalidInputsArray.push('titleValue')
    }
    if (description.deskValue === '') {
      invalidInputsArray.push('deskValue')
    }

    setInvalidInputs(invalidInputsArray)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label className='label'>Title:
        <input
          className={invalidInputs.includes("titleValue") ? "invalid" : ""}
          type='text'
          value={title.titleValue}
          placeholder='Enter title'
          onChange={handleTitleChange}
        />
      </label>
      <label className='label'>Description:
        <input className={invalidInputs.includes("deskValue") ? "invalid" : ""}
               type='text'
               value={description.deskValue}
               placeholder='Enter description'
               onChange={handleDescChange}
        />
        {!title.titleValue || !description.deskValue ? <div style={{color: "red"}}>This field is empty</div> : ''}
      </label>
      <button type='submit' onClick={handleButtonClick}>Create</button>

    </form>
  )
}
export default Form;
