import { useState, useEffect } from 'react'
import userAva from '../../assets/img/userAva.png'
import { Section } from '../Section/Section'
import { getData, setData, dataCount } from '../../utils/data'
import { task } from '../../types'

function App() {
  const [appData, setAppData] = useState(getData())
  const [countTasks, setcountTasks] = useState(dataCount())

  const updateData = (task: task, mode: string) => {
    const curSection: task[] = appData[mode]
    curSection.push(task)
    setData(appData)
    setAppData(getData())
  }

  // Change of tasks count
  useEffect(() => {
    setcountTasks(dataCount())
    console.log(countTasks)
  }, [appData])

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
        <div className="kanbanBoard__sections">
          <Section
            countTasks={countTasks}
            title={'Backlog'}
            tasks={appData.backlog}
            abilityAddTask={true}
            mode={'backlog'}
            updateData={updateData}
          />
          <Section
            countTasks={countTasks}
            title={'Ready'}
            tasks={appData.ready}
            abilityAddTask={!!+appData.backlog.length}
            mode={'ready'}
            updateData={updateData}
          />
          <Section
            countTasks={countTasks}
            title={'In Progress'}
            tasks={appData.progress}
            abilityAddTask={!!+appData.ready.length}
            mode={'progress'}
            updateData={updateData}
          />
          <Section
            countTasks={countTasks}
            title={'Finished'}
            tasks={appData.finish}
            abilityAddTask={!!+appData.progress.length}
            mode={'finish'}
            updateData={updateData}
          />
        </div>
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
          Active tasks: <span>{countTasks}</span>
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
