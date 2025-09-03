// src/App.jsx
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    industry: '',
    digital_maturity: 5,
    revenue_growth: 0.0,
    operational_efficiency: 0.0,
    innovation_score: 0.0
  });
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:8000/predict', form);
    setResult(res.data.strategy_alignment_score);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">MindRift Strategy Optimizer</h1>
      <input type="text" placeholder="Industry" onChange={e => setForm({...form, industry: e.target.value})} />
      <input type="number" placeholder="Digital Maturity" onChange={e => setForm({...form, digital_maturity: +e.target.value})} />
      {/* Other inputs */}
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 mt-4">Evaluate Strategy</button>
      {result && <div className="mt-4 text-green-600">Alignment Score: {result}</div>}
    </div>
  );
}

export default App;
