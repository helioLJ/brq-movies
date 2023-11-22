import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { router } from 'expo-router'

import { Login } from '../../src/screens/Login'

jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  router: {
    replace: jest.fn(),
  },
}))

describe('<Login />', () => {
  it('renders login screen and performs login', async () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />)

    // Find the username and password input fields
    const usernameInput = getByPlaceholderText('Usuário')
    const passwordInput = getByPlaceholderText('Senha')

    // Find the "Enter" button
    const enterButton = getByTestId('EntryButton')

    // Enter valid credentials
    fireEvent.changeText(usernameInput, 'user')
    fireEvent.changeText(passwordInput, '123')

    // Trigger the login by pressing the "Enter" button
    fireEvent.press(enterButton)

    // Wait for the login process to complete (you may need to adjust this based on your actual implementation)
    await waitFor(() => {
      // Check if the navigation has occurred
      expect(router.replace).toHaveBeenCalledWith('/home')
    })
  })
})
