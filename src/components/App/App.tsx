import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import { Sections } from '../../pages/Sections/Sections'
import { Details } from '../../pages/Details/Details'
//
import { getData, setData, dataCount, finishCount } from '../../data/data'
import { UserBlock } from '../UserBlock/UserBlock'
import { data } from '../../types'

function App() {
  const [appData, setAppData] = useState(getData()) // Download data to App
  const [countTasks, setCountTasks] = useState(dataCount()) // total tasks
  const [countTasksFinish, setCountTasksFinish] = useState(finishCount()) // finish tasks
  // Change of tasks count
  useEffect(() => {
    setCountTasks(dataCount())
    setCountTasksFinish(finishCount())
  }, [appData])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Sections appData={appData} setAppData={setAppData} />,
    },
    {
      path: 'details/:mode/:id',
      element: <Details />,
      loader: ({ params }) => {
        const data: data = getData()
        const id: string | undefined = params.id
        const mode: string | undefined = params.mode
        const res = mode && data[mode].find((task) => task.id === Number(id))
        return {
          task: res,
          mode: mode,
        }
      },
    },
  ])

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Awesome Kanban Board</h1>
        <UserBlock />
      </header>
      <main className="kanbanBoard">
        <RouterProvider router={router} />
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
