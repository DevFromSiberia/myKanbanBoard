function CustomSelect() {
  return (
    <div className="customSelect">
      <div className="customSelect__active"></div>
      <div className="customSelect__options">
        <div className="customSelect__option">1</div>
      </div>
      <svg
        width="23"
        height="13"
        viewBox="0 0 23 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.25 2.35936L2.24687 0.510406L11.5 9.07812L20.7531 0.510406L22.75 2.35936L11.5 12.776L0.25 2.35936Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

export { CustomSelect }
