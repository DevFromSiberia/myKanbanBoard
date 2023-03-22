import React from 'react'
import userAva from '../../assets/img/userAva.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Awesome Kanban Board</h1>
        <div className="userBlock">
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
          <div className="userBlock__menu">
            <a href="#">Profile</a>
            <a href="#">Log Out</a>
          </div>
        </div>
      </header>
      <main className="kanbanBoard">
        {/* <div className="kanbanBoard__sections">
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
        </div> */}
        {/* <div className="kanbanBoard__details">
          <h2 className="title">Main page – performance issues</h2>
          <p className="description">
            Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
            охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
            русские не выгнали оккупантов. А когда немцы ушли, Пахапиль
            вернулся. Он появился в Раквере, где советский капитан наградил его
            медалью. Медаль была украшена четырьмя непонятными словами, фигурой
            и восклицательным знаком.
          </p>
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
        </div> */}
      </main>
      <footer className="footer">
        <div className="footer__item">
          Active tasks: <span>N</span>
        </div>
        <div className="footer__item">
          Finished tasks: <span>M</span>
        </div>
        <div className="footer__item">
          Kanban board by <span>Name,</span> <span>Year</span>
        </div>
      </footer>
    </div>
  )
}

export default App
