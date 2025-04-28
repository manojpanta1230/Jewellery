import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SalesRepList from './pages/SalesRepList';
import AddSalesRepresentative from './pages/AddSalesRepresentative';
import Karigar from './pages/Karigar';
import Production from './pages/Production';
import RawMetal from './pages/RawMetal';
import PurchaseRawMetal from './pages/PurchaseRawMetal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales-representative" element={<SalesRepList />} />
        <Route path="/add-sales-representative" element={<AddSalesRepresentative />} />
        <Route path="/karigar" element={<Karigar />} />
        <Route path="/production" element={<Production />} />
        <Route path="/raw-metal" element={<RawMetal />} />
        <Route path="/add-metal" element={<PurchaseRawMetal />} />
      </Routes>
    </Router>
  );
}

export default App;
