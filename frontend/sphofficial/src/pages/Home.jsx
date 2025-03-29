// pages/Home.js
import { FaStar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Hotels from '../components/Hotels';

const hotels = [
  {
    name: 'The Oakes Hotel Overlooking...',
    rating: 4.9,
    reviews: '31,954 Positive review'
  },
  {
    name: 'Comfort Inn & Suites',
    rating: 4.8,
    reviews: '28,837 Positive review'
  }
];

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero/>
     <Hotels/>
   
    </div>
  );
}