import { useState, useRef, useLayoutEffect } from 'react'
import { task } from '../../types'

interface Props {
  tasks: task[]
}

function CustomSelect({ tasks }: Props) {
  const [expand, setExpand] = useState(false)

  const refCustomSelect = useRef(null)
  const refCustomSelectActive = useRef(null)

  const [heightCustomSelect, setHeightCustomSelect] = useState(0)
  const [heightCustomSelectActive, setHeightCustomSelectActive] = useState(0)

  useLayoutEffect(() => {
    const curCustomSelect: any = refCustomSelect.current
    const curCustomSelectActive: any = refCustomSelectActive.current

    curCustomSelect && setHeightCustomSelect(curCustomSelect.clientHeight)
    curCustomSelectActive &&
      setHeightCustomSelectActive(curCustomSelectActive.clientHeight)
  }, [])

  const styleCustomSelect = {
    height: expand ? heightCustomSelect : heightCustomSelectActive,
  }

  const styleArrow = {
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  }

  return (
    <div
      onClick={() => setExpand(!expand)}
      className="customSelect"
      style={styleCustomSelect}
    >
      <div ref={refCustomSelect} className="wrapper">
        <div ref={refCustomSelectActive} className="customSelect__active">
          <p></p>
          <svg
            style={styleArrow}
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
        <div className="customSelect__options">
          {tasks.map((task) => (
            <div key={task.id} className="customSelect__option">
              {task.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { CustomSelect }
