import React from 'react'
import userAva from '../../assets/img/userAva.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Awesome Kanban Board</h1>
        <div className="userBlock">
          <div className="avatar">
            <img src={userAva} alt="avatar" />
          </div>
          <svg
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
        </div>
      </header>
      <main className="kanbanBoard">
        <div className="kanbanBoard__sections">
          <div className="kanbanBoard__section">
            <div className="title">Backlog</div>
            <div className="tasks">
              <div className="task">Login page – performance issues</div>
            </div>

            <button className="addBtn">
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
          <div className="kanbanBoard__section">
            <div className="title">Ready</div>
            <button className="addBtn">
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
          <div className="kanbanBoard__section">
            <div className="title">In Progress</div>
            <button className="addBtn">
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
          <div className="kanbanBoard__section">
            <div className="title">Finished</div>
            <button className="addBtn">
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
        </div>
      </main>
      <footer className="footer">
        <div className="footer__item">
          Active tasks: <span>N</span>
        </div>
        <div className="footer__item">
          Finished tasks: <span>M</span>
        </div>
        <div className="footer__item">
          Kanban board by <span>Name</span>, <span>Year</span>
        </div>
      </footer>
    </div>
  )
}

export default App
