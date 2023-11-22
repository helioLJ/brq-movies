import { render } from '@testing-library/react-native'

import { MovieDetails } from '../../src/components/Movie/MovieDetails'

describe('MovieDetails Component', () => {
  it('renders movie details correctly', () => {
    const title = 'Test Movie'
    const overview = 'This is a test movie overview.'

    const { getByText } = render(
      <MovieDetails title={title} overview={overview} />,
    )

    // Check if the title and overview are rendered
    const titleElement = getByText(title)
    const overviewElement = getByText(overview)

    expect(titleElement).toBeDefined()
    expect(overviewElement).toBeDefined()
  })

  // Add more test cases if needed
})
