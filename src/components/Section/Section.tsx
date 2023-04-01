import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { task } from '../../types'
import { generateId } from '../../data/data'
import { CustomSelect } from '../CustomSelect/CustomSelect'

interface Props {
  countTasks: number
  abilityAddTask: boolean
  title: string
  tasks: task[]
  mode: string
  prevMode: string
  addTask: Function
  removeTask: Function
  prevTasks: task[]
}

function Section({
  countTasks,
  tasks,
  prevTasks,
  title,
  abilityAddTask,
  mode,
  prevMode,
  addTask,
  removeTask,
}: Props) {
  const [stateSection, setStateSection] = useState(0) //1-input, 2-select
  const [stateInput, setStateInput] = useState('')
  const [stateBtn, setStateBtn] = useState(false) // false - addCard, true - submit

  useEffect(() => {
    stateInput !== '' ? setStateBtn(true) : setStateBtn(false)
  }, [stateInput])

  const onClickAddCard = () => {
    if (mode === 'backlog') {
      setStateSection(1)
    } else {
      setStateSection(2)
    }
  }

  const onClickSubmitBtn = () => {
    const id = generateId()
    if (mode === 'backlog') {
      const result: task = {
        id: id,
        title: stateInput,
        descr: '',
      }
      addTask(result, mode)
      onClickCancelBtn()
    } else {
      prevTasks.forEach((task) => {
        if (task.title === stateInput) {
          addTask(task, mode)
          removeTask(task, prevMode)
        }
      })
      onClickCancelBtn()
    }
  }

  const onClickCancelBtn = () => {
    setStateSection(0)
    setStateBtn(false)
  }

  return (
    <div className="kanbanBoard__section">
      <div className="title">{title}</div>
      <div className="tasks">
        {tasks.map((task) => (
          <Link
            to={`details/${mode}/${task.id}`}
            key={task.id}
            className="task"
          >
            {task.title}
          </Link>
        ))}

        {stateSection === 1 ? (
          <input
            onChange={(e) => setStateInput(e.target.value)}
            className="inputTask"
            type="text"
            autoFocus
          />
        ) : stateSection === 2 ? (
          <CustomSelect
            tasks={prevTasks}
            onChoice={(choice: string) => {
              setStateInput(choice)
            }}
          />
        ) : (
          ''
        )}
      </div>

      {stateSection ? (
        <>
          <button
            disabled={!abilityAddTask}
            onClick={stateBtn ? onClickSubmitBtn : onClickAddCard}
            className={stateBtn ? 'submitBtn' : 'addBtn'}
          >
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
            <span>{stateBtn ? 'Submit' : 'Add card'}</span>
          </button>
          <button
            disabled={!abilityAddTask}
            onClick={onClickCancelBtn}
            className="cancelBtn"
          >
            <span>Cancel</span>
          </button>
        </>
      ) : (
        <button
          disabled={!abilityAddTask}
          onClick={onClickAddCard}
          className="addBtn"
        >
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
          <span>{stateBtn ? 'Submit' : 'Add card'}</span>
        </button>
      )}
    </div>
  )
}

export { Section }
