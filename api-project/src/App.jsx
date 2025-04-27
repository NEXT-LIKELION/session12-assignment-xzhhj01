// src/App.jsx
import React from 'react';
import NaverMap from './utils/mapAPI';

function App() {
  const lat = 37.5665;
  const lng = 126.9780;

  return (
    <div style={{ padding: '20px' }}>
      <h2>네이버 지도 예제</h2>
      <NaverMap lat={lat} lng={lng} />
    </div>
  );
}

export default App;
