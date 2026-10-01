import { useState } from 'react';

function StatusPanel(){
    const status = ["Dostępny", "Zajęty", "Nieobecny"]
    const [aktualny,setAktualny]= useState(0)
    return (
        <div className="App">
        <p>{status[aktualny]}</p>
        <button onClick={() => setAktualny((aktualny + 1) % status.length)}>Zmień</button>
        </div>
    );
}

export default StatusPanel;