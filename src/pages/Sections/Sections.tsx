import { Section } from '../../components/Section/Section'
import { data } from '../../types'

interface Props {
  appData: data
  setAppData: Function
}

function Sections({ appData, setAppData }: Props) {
  return (
    <div className="kanbanBoard__sections">
      <Section
        appData={appData}
        setAppData={setAppData}
        title={'Backlog'}
        tasks={appData.backlog}
        prevTasks={[]}
        abilityAddTask={true}
        mode={'backlog'}
        prevMode={''}
      />
      <Section
        appData={appData}
        setAppData={setAppData}
        title={'Ready'}
        tasks={appData.ready}
        prevTasks={appData.backlog}
        abilityAddTask={!!+appData.backlog.length}
        mode={'ready'}
        prevMode={'backlog'}
      />
      <Section
        appData={appData}
        setAppData={setAppData}
        title={'In Progress'}
        tasks={appData.progress}
        prevTasks={appData.ready}
        abilityAddTask={!!+appData.ready.length}
        mode={'progress'}
        prevMode={'ready'}
      />
      <Section
        appData={appData}
        setAppData={setAppData}
        title={'Finished'}
        tasks={appData.finish}
        prevTasks={appData.progress}
        abilityAddTask={!!+appData.progress.length}
        mode={'finish'}
        prevMode={'progress'}
      />
    </div>
  )
}
export { Sections }
