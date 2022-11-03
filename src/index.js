import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/Gilroy-Regular.ttf';
import './assets/fonts/Gilroy-Medium.ttf';
import './assets/fonts/Gilroy-Semibold.ttf';
import './assets/fonts/Gilroy-Bold.ttf';
import './styles/index.scss';
import AppWrapper from './components/AppWrapper/AppWrapper';
const root = ReactDOM.createRoot(document.getElementById('root'));
const strictMode = process.env.NODE_ENV === 'production';

root.render(
  (strictMode && (
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  )) || <AppWrapper />,
);