import React from 'react';

import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);

export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>¡Hola Mundo en Web!</h1>
    </div>
  );
}
