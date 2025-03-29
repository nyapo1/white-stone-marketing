// pages/Home.js
import { FaStar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Hotels from '../components/Hotels';


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero/>
     <Hotels/>
   
    </div>
  );
}