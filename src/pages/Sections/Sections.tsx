import { Section } from '../../components/Section/Section'
import { data } from '../../types'

interface Props {
  appData: data
  countTasks: number
  addTask: Function
  removeTask: Function
}

function Sections({ appData, countTasks, addTask, removeTask }: Props) {
  return (
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
  )
}
export { Sections }
