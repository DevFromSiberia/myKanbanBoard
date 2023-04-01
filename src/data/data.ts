import { data } from '../types'

function storageInit() {
  !localStorage.getItem('data') &&
    localStorage.setItem(
      'data',
      `{
      "backlog": [],
      "ready": [],
      "progress": [],
      "finish": []
      }`
    )
}

function getData(): data {
  const data: string | null = localStorage.getItem('data')
  const result: data = data ? JSON.parse(data) : {}
  return result
}

function setData(data: data) {
  const jsonData = JSON.stringify(data)
  localStorage.setItem('data', jsonData)
}

function dataCount(): number {
  let counter: number = 0
  const curData: any = getData()

  for (let key in curData) {
    if (key !== 'finish') {
      counter += +curData[key].length
    }
  }
  return counter
}

function finishCount(): number {
  let counter: number = 0
  const curData: any = getData()

  counter += +curData['finish'].length

  return counter
}

function generateId(): number {
  let id: number = 0
  const curData: any = getData()

  for (let key in curData) {
    id += +curData[key].length
  }
  return id
}

export { storageInit, getData, setData, dataCount, finishCount, generateId }
/*{
      id: '0',
      title: 'Hello finish',
      descr: 'Write Hello World',
    },*/
