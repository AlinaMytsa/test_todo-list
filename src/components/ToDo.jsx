import React, {useState} from 'react';

const ToDo = (props) => {
  const [showModal, setShowModal] = useState(false)

  const handleTodoClick = () => {
    setShowModal(true)

  }

  const closeModal = () => {
    setShowModal(false)
  }

  const detailedTemplate = (
    <div className="modal"
         style={{
           maxWidth:"500px",
           margin:'0 auto',
           padding:'25px 15px',
           backgroundColor:'white',
           display:'flex',
           justifyContent:'center',
           flexDirection:'column',
           boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'} }>

      <div className="modal-content">
        <h2>{props.name}</h2>
        <b>Id:{props.id}</b>
        <div>Description:{props.description}</div>
        <div>Status:
          <input id={props.id}
                 type='checkbox'
                 defaultChecked={props.completed}
          />
        </div>
      </div>
      <div className='btn'>
        <button type='button'
                className='todo-cancel'
                onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  )

  const viewTemplate = (
    <div onClick={handleTodoClick}>
      <div>ID:{props.id}</div>
      <div>{props.name}</div>
      <div>Description:{props.description}</div>
      <div>Status:
        <input id={props.id}
               type='checkbox'
               defaultChecked={props.completed}
        />
      </div>
    </div>
  )

  return (
    <li className='todo'>{showModal ? detailedTemplate : viewTemplate}</li>
  );
};

export default ToDo;
