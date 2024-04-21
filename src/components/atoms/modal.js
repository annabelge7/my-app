import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = (
    <div className="fixed inset-0 mb-20 flex items-end justify-end bg-black bg-opacity-50 p-2">
      <div className="bg-accent w-full rounded-lg p-2 shadow-2xl md:w-1/4 lg:w-1/6 xl:w-1/6 2xl:w-1/6">
        <div className="modal-header flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={handleCloseClick} className="text-lg font-semibold">
            X
          </button>
        </div>
        <div className="modal-body bg-secondary flex flex-col rounded-lg pb-64 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root'),
  )
}

export default Modal
