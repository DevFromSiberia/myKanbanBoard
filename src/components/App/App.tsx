import { useState, useEffect } from 'react'
import { Sections } from '../../pages/Sections/Sections'
import { Details } from '../../pages/Details/Details'
import { getData, setData, dataCount, finishCount } from '../../utils/data'
import { UserBlock } from '../UserBlock/UserBlock'
import { task } from '../../types'

function App() {
  const [appData, setAppData] = useState(getData())
  const [countTasks, setCountTasks] = useState(dataCount()) // total tasks
  const [countTasksFinish, setCountTasksFinish] = useState(finishCount()) // finish tasks

  const addTask = (task: task, mode: string) => {
    const curSection: task[] = appData[mode]
    curSection.push(task)
    setData(appData)
    setAppData(getData())
  }

  const removeTask = (task: task, mode: string) => {
    const curSection: task[] = appData[mode]
    curSection.forEach(
      (removedTask, index) =>
        task.id === removedTask.id && curSection.splice(index, 1)
    )
    setData(appData)
    setAppData(getData())
  }

  // Change of tasks count
  useEffect(() => {
    setCountTasks(dataCount())
    setCountTasksFinish(finishCount())
  }, [appData])

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Awesome Kanban Board</h1>
        <UserBlock />
      </header>
      <main className="kanbanBoard">
        <Sections
          appData={appData}
          countTasks={countTasks}
          addTask={addTask}
          removeTask={removeTask}
        />

        {/* <Details /> */}
      </main>
      <footer className="footer">
        <div className="footer__item">
          Active tasks: <span>{countTasks}</span>
        </div>
        <div className="footer__item">
          Finished tasks: <span>{countTasksFinish}</span>
        </div>
        <div className="footer__item">
          Kanban board by <span>Name,</span> <span>Year</span>
        </div>
      </footer>
    </div>
  )
}

export default App
