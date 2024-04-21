import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Replace Switch with Routes
import Choose from './choose';
import Card from './card';
import Home from './home';
import Ewallet from './ewallet';
import Fpx from './fpx';
import Redirect from './redirect';
import LinkEWallet from './linkEWallet';
import Successful from './successful';
import InvoiceList from './invoiceList';
import PaymentHis from './paymentHis';
import Invoice from './invoice';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/choose" element={<Choose />} /> 
        <Route path="/card" element={<Card />} /> 
        <Route path="/ewallet" element={<Ewallet />} /> 
        <Route path="/fpx" element={<Fpx />} /> 
        <Route path="/redirect" element={<Redirect />} /> 
        <Route path="/linkEWallet" element={<LinkEWallet />} /> 
        <Route path="/successful" element={<Successful />} /> 
        <Route path="/invoiceList" element={<InvoiceList />} /> 
        <Route path="/paymentHis" element={<PaymentHis />} /> 
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;
