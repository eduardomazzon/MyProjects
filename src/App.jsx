
import { Routes, Route} from 'react-router-dom';
import { Home, Menu, Explore, Activity, Community, Pages, Contact, All, Recent, Purchase, WalletConnect} from './components/index.js';










function App() {
 
  
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore/" element={<Explore />} />
      <Route path="/activity/" element={<Activity />} />
      <Route path="/community/" element={<Community />} />
      <Route path="/pages/" element={<Pages />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="/all/" element={<All />} />
      <Route path="/recent/" element={<Recent />} />
      <Route path="/purchase/" element={<Purchase />} />
      <Route path="/walletconnect/" element={<WalletConnect />} />
     


      
    </Routes>






   


    
    </>
  )
}

export default App