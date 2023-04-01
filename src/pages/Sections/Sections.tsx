import { Section } from '../../components/Section/Section'
import { data } from '../../types'

interface Props {
  appData: data
  addTask: Function
  removeTask: Function
}

function Sections({ appData, addTask, removeTask }: Props) {
  return (
    <div className="kanbanBoard__sections">
      <Section
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
