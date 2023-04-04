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
})
