import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

test('renders welcome message and core UI elements', () => {
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  );
  
  // Check for welcome message
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  
  // Check for language selector buttons
  expect(screen.getByText(/english/i)).toBeInTheDocument();
  expect(screen.getByText(/français/i)).toBeInTheDocument();
  
  // Check for theme toggle
  expect(screen.getByText(/basculer en mode/i)).toBeInTheDocument();
  
  // Check for task form elements
  expect(screen.getByText(/titre:/i)).toBeInTheDocument();
  expect(screen.getByText(/priorité:/i)).toBeInTheDocument();
  expect(screen.getByText(/ajouter la tâche/i)).toBeInTheDocument();
  
  // Check for task list heading
  expect(screen.getByText(/mes tâches/i)).toBeInTheDocument();
});
