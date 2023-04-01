import { useState } from 'react'
import userAva from '../../assets/img/userAva.png'

function UserBlock() {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)} className="userBlock">
      <div className="userBlock__avatar">
        <img src={userAva} alt="avatar" />
      </div>
      <svg
        className="userBlock__arrow"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.415 0.210022L6 4.79502L10.585 0.210022L12 1.62502L6 7.62502L0 1.62502L1.415 0.210022Z"
          fill="white"
        />
      </svg>
      <div className={open ? 'userBlock__menu-active' : 'userBlock__menu'}>
        <a href="#">Profile</a>
        <a href="#">Log Out</a>
      </div>
    </div>
  )
}

export { UserBlock }
