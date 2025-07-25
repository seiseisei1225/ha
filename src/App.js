import React from 'react';

import './App.css';
import m1 from './images/メンズコーチ.jpg';

function App() {
  return (
    <div className="App">
      <h1>トレーニングメニュー</h1>
      
      <div>
        <img src={m1} alt="メンズコーチ" />
      </div>
      <p><h2>世界一のトレーニング記録サイト
        </h2></p>
        <p>
          世界１のトレーニングサイトを作成しております。<br/>
          作成中
        </p>
    </div>
  );
}

export default App;
