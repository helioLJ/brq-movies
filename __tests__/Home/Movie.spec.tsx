// MovieCard.spec.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { router } from 'expo-router'

import { MovieCard } from '../../src/components/Home/MovieCard'

jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  router: {
    replace: jest.fn(),
  },
}))

describe('MovieCard Component', () => {
  const mockItem = {
    id: 1,
    poster_path: 'poster1.jpg',
  }

  it('renders the MovieCard component', () => {
    const { getByTestId } = render(<MovieCard item={mockItem} />)

    // Check if the MovieCard component is rendered
    expect(getByTestId('movie-card-1')).toBeTruthy()
  })

  it('navigates to the movie details when pressed', () => {
    const { getByTestId } = render(<MovieCard item={mockItem} />)

    // Simulate a press event
    fireEvent.press(getByTestId('movie-card-1'))

    // Check if the navigation function is called with the correct path
    expect(router.replace).toHaveBeenCalledWith('/movie/1')
  })
})
