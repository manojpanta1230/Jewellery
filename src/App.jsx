import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SalesRepList from './pages/SalesRepList';
import AddSalesRepresentative from './pages/Add Page/AddSalesRepresentative';
import Karigar from './pages/Karigar';
import Production from './pages/Production';
import RawMetal from './pages/RawMetal';
import PurchaseRawMetal from './pages/Add Page/PurchaseRawMetal';
import AddNewKarigar from './pages/Add Page/AddNewKarigar';
import NewProduction from './pages/Add Page/NewProduction';
import SalesRepProfile from './pages/View Page/SalesRepProfile';
import ViewKarigar from './pages/View Page/ViewKarigar';
import AcSettlement from './pages/View Page/AcSettlement';
import KarigarAccountDetail from './pages/KarigarAccountDetails';
import ProductionDetail from './pages/ProductionDetail';
import UserProfileCard from './pages/UserProfileCard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
        <Route path="/add-new-karigar" element={<AddNewKarigar />} />
        <Route path="/new-production" element={<NewProduction />} />
        <Route path="/view-salesrepresentatives" element={<SalesRepProfile />} />
        <Route path="/view-karigar" element={<ViewKarigar />} />
        <Route path="/karigar-ac-settlement" element={<AcSettlement />} />
        <Route path="/karigaraccountdetail" element={<KarigarAccountDetail />} />
        <Route path="/productiondetails" element={<ProductionDetail />} />
        <Route path="/userprofilecard" element={<UserProfileCard/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/signup" element={<SignUp/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
