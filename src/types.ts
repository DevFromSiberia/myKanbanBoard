interface task {
  id: number
  title: string
  descr: string
}

interface data {
  [mode: string]: task[]
  backlog: task[]
  ready: task[]
  progress: task[]
  finish: task[]
}

export { data, task }
