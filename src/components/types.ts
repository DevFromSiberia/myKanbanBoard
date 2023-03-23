interface task {
  id: string
  title: string
  descr: string
}

interface data {
  backlog: task[]
  ready: task[]
  progress: task[]
  finish: task[]
}

export { data, task }
