import { useState, useEffect } from 'react'
import { Section } from '../Section/Section'
import { getData, setData, dataCount, finishCount } from '../../utils/data'
import { task } from '../../types'
import { UserBlock } from '../UserBlock/UserBlock'

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
        <div className="kanbanBoard__sections">
          <Section
            countTasks={countTasks}
            title={'Backlog'}
            tasks={appData.backlog}
            prevTasks={[]}
            abilityAddTask={true}
            mode={'backlog'}
            prevMode={''}
            addTask={addTask}
            removeTask={removeTask}
          />
          <Section
            countTasks={countTasks}
            title={'Ready'}
            tasks={appData.ready}
            prevTasks={appData.backlog}
            abilityAddTask={!!+appData.backlog.length}
            mode={'ready'}
            prevMode={'backlog'}
            addTask={addTask}
            removeTask={removeTask}
          />
          <Section
            countTasks={countTasks}
            title={'In Progress'}
            tasks={appData.progress}
            prevTasks={appData.ready}
            abilityAddTask={!!+appData.ready.length}
            mode={'progress'}
            prevMode={'ready'}
            addTask={addTask}
            removeTask={removeTask}
          />
          <Section
            countTasks={countTasks}
            title={'Finished'}
            tasks={appData.finish}
            prevTasks={appData.progress}
            abilityAddTask={!!+appData.progress.length}
            mode={'finish'}
            prevMode={'progress'}
            addTask={addTask}
            removeTask={removeTask}
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
