import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
  it('Adding tasks in backlog section', () => {
    localStorage.setItem(
      'data',
      `{
          "backlog": [],
          "ready": [],
          "progress": [],
          "finish": []
          }`
    )

    const { getByTestId } = render(<App />)
    let addBtn = getByTestId('backlog-button')
    fireEvent.click(addBtn)
    const input = getByTestId('backlog-input')
    fireEvent.change(input, { target: { value: 'test title task' } })
    addBtn = getByTestId('backlog-button')
    fireEvent.click(addBtn)
    const task = getByTestId('backlog-task')
    expect(task.innerHTML).toBe('test title task')
  })

  it('Adding tasks in ready section', () => {
    const sourceData = localStorage.setItem(
      'data',
      `{
          "backlog": [{
            "id": "0",
            "title": "test task",
            "descr": ""
          }],
          "ready": [],
          "progress": [],
          "finish": []
          }`
    )
    const sourceDataObj = {
      backlog: [
        {
          id: '0',
          title: 'test task',
          descr: '',
        },
      ],
      ready: [],
      progress: [],
      finish: [],
    }
    const { getByTestId } = render(<App />)

    const addBtn = getByTestId('ready-button')
    fireEvent.click(addBtn)

    const customSelect = getByTestId('customSelect')
    fireEvent.click(customSelect)

    const customSelectOption = getByTestId('customSelectOption')
    console.log(customSelectOption)
    fireEvent.click(customSelectOption)

    const submitBtn = getByTestId('ready-button')
    fireEvent.click(submitBtn)

    const newData = localStorage.getItem('data')
    const newDataObj = newData && JSON.parse(newData)

    expect(sourceDataObj.backlog[0].title).toBe(newDataObj.ready[0].title)
  })
})
