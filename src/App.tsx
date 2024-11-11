import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/atoms/ThemeToggle/ThemeToggle';
import TaskForm from '@/components/organisms/TaskForm/TaskForm';
import ListeTaches from '@/components/molecules/ListeTaches/ListeTaches';
import LanguageSelector from '@/components/atoms/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <ThemeProvider>
        <div>
          <LanguageSelector />
          <h1>{t('welcome')}</h1>
          <ThemeToggle />
          <TaskForm />
          <ListeTaches />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
