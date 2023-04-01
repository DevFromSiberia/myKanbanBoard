import { useLoaderData, Link } from 'react-router-dom'
import { data } from '../../types'
import { getData, setData } from '../../data/data'
import { useState } from 'react'

function Details() {
  const res: any = useLoaderData()
  const title = res.task.title
  const descr = res.task.descr

  const [editMode, setEditMode] = useState(false)
  const [editFieldState, setEditFieldState] = useState('')

  const editDescr = (e: any) => {
    const value: string | null = e.target.value
    value ? setEditFieldState(value) : setEditFieldState('')
  }

  return (
    <div className="kanbanBoard__details">
      <h2 className="title">{title}</h2>
      {editMode ? (
        <textarea
          onChange={(e) => editDescr(e)}
          className="editField"
          autoFocus
        />
      ) : (
        <p className="description">{descr}</p>
      )}

      <div className="buttonBlock">
        <Link
          to={window.location.pathname}
          onClick={() => {
            if (editMode) {
              const data: data = getData()
              const task = data[res.mode].find(
                (task) => task.id === Number(res.task.id)
              )
              if (task && editFieldState !== '') {
                task.descr = editFieldState
                setData(data)
              }
            }
            setEditMode(!editMode)
          }}
          className={editMode ? 'cancelBtn' : 'editBtn'}
        >
          <p>{editMode ? 'Cancel' : 'Edit'}</p>
          {editMode ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14.2524V18.0024H3.75L14.81 6.94244L11.06 3.19244L0 14.2524ZM17.71 4.04244C17.8027 3.94993 17.8763 3.84004 17.9264 3.71907C17.9766 3.59809 18.0024 3.46841 18.0024 3.33744C18.0024 3.20648 17.9766 3.07679 17.9264 2.95582C17.8763 2.83485 17.8027 2.72496 17.71 2.63244L15.37 0.292444C15.2775 0.19974 15.1676 0.126193 15.0466 0.0760114C14.9257 0.02583 14.796 0 14.665 0C14.534 0 14.4043 0.02583 14.2834 0.0760114C14.1624 0.126193 14.0525 0.19974 13.96 0.292444L12.13 2.12244L15.88 5.87244L17.71 4.04244Z"
                fill="black"
              />
            </svg>
          )}
        </Link>
        <Link className="closeBtn" to="/">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4286 22.4286L1 1M22.4286 1L1 22.4286"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export { Details }
