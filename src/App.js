import { useState } from 'react'
import QRCode from 'react-qr-code';
import './App.css';

function App() {

  const [value,setValue] = useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="App">
        <h3>Содержимое QR-CODE</h3>
        <input className="changeValue" type="text" placeholder="Введите ссылку" onChange={changeValue}/>
        <QRCode className="qr-code" value={value}/>
    </div>
  );
}

export default App;
