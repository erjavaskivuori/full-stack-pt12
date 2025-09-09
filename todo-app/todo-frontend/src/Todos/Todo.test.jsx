import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Todo from './Todo'

const todoNotDone = {
  text: 'Learn testing',
  done: false,
}
const todoDone = {
  text: 'Learn testing',
  done: true,
}

describe('<Todo />', () => {
  it('renders todo text', () => {
    render(<Todo todo={todoNotDone} onClickDelete={() => {}} onClickComplete={() => {}} />)
    expect(screen.getByText('Learn testing')).toBeInTheDocument()
  })

  it('shows "Set as done" button when not done', () => {
    render(<Todo todo={todoNotDone} onClickDelete={() => {}} onClickComplete={() => {}} />)
    expect(screen.getByText('Set as done')).toBeInTheDocument()
  })

  it('shows "This todo is done" when done', () => {
    render(<Todo todo={todoDone} onClickDelete={() => {}} onClickComplete={() => {}} />)
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
  })

  it('calls onClickDelete when Delete is clicked', async () => {
    const mockDelete = vi.fn()
    render(<Todo todo={todoNotDone} onClickDelete={mockDelete} onClickComplete={() => {}} />)
    const user = userEvent.setup()
    await user.click(screen.getByText('Delete'))
    expect(mockDelete).toHaveBeenCalled()
  })

  it('calls onClickComplete when Set as done is clicked', async () => {
    const mockComplete = vi.fn()
    render(<Todo todo={todoNotDone} onClickDelete={() => {}} onClickComplete={mockComplete} />)
    const user = userEvent.setup()
    await user.click(screen.getByText('Set as done'))
    expect(mockComplete).toHaveBeenCalled()
  })
})
