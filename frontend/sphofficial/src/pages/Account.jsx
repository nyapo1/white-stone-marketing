// pages/Account.js

import Balances from '../components/Account/Balances';
import Navbar from '../components/Navbar';

export default function AccountPage() {
  return (
    <div>
      <Navbar />
      <Balances/>
    </div>
  );
}