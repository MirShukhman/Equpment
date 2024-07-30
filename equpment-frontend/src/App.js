import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './comps/Footer';
import Main from './comps/main/Main';
import LogIn from './comps/main/LogIn/LogIn';
import ChooseBranch from './comps/main/ChooseBranch/ChooseBranch';
import BranchOrders from "./comps/main/BranchOrders/BranchOrders";
import ManagmentOrders from "./comps/main/MngmntOrders/MngmntOrders";
import CreateOrder from './comps/main/CreateOrder/CreateOrder';
import MyProfile from './comps/main/MyProfile/MyProfile';
import ManageUsers from './comps/main/ManageUsers/ManageUsers';
import ManageCats from './comps/main/MangeEqupment/ManageCats/ManageCats';
import ManageEqupment from './comps/main/MangeEqupment/ManageEqupment';
import ManageSuppliers from './comps/main/ManageSuppliers/ManageSuppliers';
import ManageBranches from './comps/main/ManageBranches/ManageBranches';
import RequresAttention from './comps/main/MngmntOrders/RequresAttention/RequresAttention';
import ShipOrders from './comps/main/MngmntOrders/ShipOrders/ShipOrders';
import { URLProvider } from './comps/context/URL';
import { TokenProvider } from './comps/context/Token';
import { BranchProvider } from './comps/context/BranchData';
import { CartProvider } from './comps/context/Cart';
import './App.css'

function App() {
  return (
    <div className='app'>
      <URLProvider>
        <TokenProvider>
          <BranchProvider>
            <CartProvider>

              <Main className='main' />

              <Routes>
                <Route path="/Equpment" element={<LogIn />} />
                <Route path="/Equpment/my_profile" element={<MyProfile />} />

                <Route path="/Equpment/choose_branch" element={<ChooseBranch />} />
                <Route path="/Equpment/branch_orders" element={<BranchOrders />} />
                <Route path="/Equpment/create_order" element={<CreateOrder />} />

                <Route path="/Equpment/managment_orders" element={<ManagmentOrders />} />
                <Route path="/Equpment/requres_attention" element={<RequresAttention />} />
                <Route path="/Equpment/ship_orders" element={<ShipOrders />} />
                <Route path="/Equpment/manage_users" element={<ManageUsers />} />
                <Route path="/Equpment/manage_equpment_categories" element={<ManageCats />} />
                <Route path="/Equpment/manage_equpment_items" element={<ManageEqupment />} />
                <Route path="/Equpment/manage_suppliers" element={<ManageSuppliers />} />
                <Route path="/Equpment/manage_branches" element={<ManageBranches />} />
              </Routes>

              <Footer />

            </CartProvider>
          </BranchProvider>
        </TokenProvider>
      </URLProvider>
    </div >
  );
}

export default App;