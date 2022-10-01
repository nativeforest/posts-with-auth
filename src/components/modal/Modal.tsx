import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
function Modal({
  isOpen,
  onClose,
  children,}:any):React.ReactPortal | null {
  if (!isOpen) return null

  const container = (e:React.MouseEvent) => {
      e.stopPropagation()
  }
  return ReactDOM.createPortal(
    <div 
    className='modal'
    onClick={ onClose }>
    <div className='modal__container' onClick={container }>
            {
                onClose && (
                    <section className=''>
                        <button onClick={ onClose }>
                            XXXXX
                        </button>
                    </section>
                )
            }
        <section className='modal__content'>
            { children }
        </section>
    </div>
</div>,
  document.getElementById('modal-root') as HTMLElement)
}

export {Modal}

