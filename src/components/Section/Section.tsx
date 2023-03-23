import { useState } from 'react'
import React from 'react'

import { task } from '../types'

interface Props {
  abilityAddTask: boolean
  title: string
  tasks: task[]
}

function Section({ tasks, title, abilityAddTask }: Props) {
  const [addTaskMode, setAddTaskMode] = useState(false)

  const onClickAddCard = () => {}
  return (
    <div className="kanbanBoard__section">
      <div className="title">{title}</div>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            {task.title}
          </div>
        ))}
      </div>

      <button disabled={!abilityAddTask} onClick={() => {}} className="addBtn">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z"
            fill="#5E6C84"
          />
        </svg>
        <span>Add card</span>
      </button>
    </div>
  )
}

export { Section }
