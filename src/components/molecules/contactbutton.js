'use client'
import { Button } from '../atoms'
import Modal from '../atoms/modal'
import { useState } from 'react'

export default function ContactButton() {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)

  const handleSend = (event) => {
    event.preventDefault() // Prevent the form from causing a page reload
    setMessageSent(true)
  }
  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true)
          setMessage('')
          setName('')
          setMessageSent(false)
        }}
        text="Contact"
      ></Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {messageSent ? (
            <div className="font-dark p-4 pl-10">
              Message sent!
              <Button text="Close" onClick={() => setShowModal(false)} />
            </div>
          ) : (
            <form onSubmit={handleSend}>
              <label className="nt-4 p-2">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-primary ml-4 mr-4 w-5/6 rounded-lg p-4 pl-4 shadow-2xl"
                />
              </label>
              <br />
              <label className="mt-4 p-2">
                Message:
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-primary ml-4 mr-4 w-5/6 rounded-lg p-4 pl-4 shadow-2xl"
                />
              </label>
              <br />
              <Button type="submit" text="Send" />
            </form>
          )}
        </Modal>
      )}
    </div>
  )
}
