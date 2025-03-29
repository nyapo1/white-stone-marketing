import React, { useState } from 'react';
import { MdArrowForward, MdArrowBack, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const aboutItems = [
    {
      title: "User agreement",
      content: `
        Here are the terms and conditions of our service. Please read carefully to understand your rights and obligations. 
        
        1. **Acceptance of Terms**: By using our services, you accept and agree to be bound by these terms. If you do not agree to the terms, please refrain from using our services.
        
        2. **User Responsibilities**: You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        
        3. **Service Modifications**: We reserve the right to modify or discontinue our services at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
        
        4. **Limitation of Liability**: Our liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
        
        5. **Governing Law**: These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company operates.
      `
    },
    {
      title: "Privacy",
      content: `
        Your privacy is important to us. We handle your data with care and ensure compliance with relevant regulations. 
        
        1. **Information Collection**: We collect personal information that you provide to us directly, such as your name, email address, and any other information you choose to provide.
        
        2. **Use of Information**: We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
        
        3. **Data Protection**: We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or destruction.
        
        4. **Data Sharing**: We do not sell or rent your personal information to third parties. We may share your information with trusted partners to help us operate our services, provided those parties agree to keep this information confidential.
        
        5. **Your Rights**: You have the right to access, correct, or delete your personal information. You can also object to the processing of your data in certain circumstances.
      `
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">
        <Link to='/account'>
          <MdArrowBack className='inline mr-3' />
        </Link>
        About Us
      </h2>
      <h3 className="text-xl font-semibold my-5">White Stone Marketing</h3>
      <div className="space-y-4 w-150">
        {aboutItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="p-4 bg-gray-300 flex justify-between items-center rounded-lg cursor-pointer" onClick={() => toggleExpand(index)}>
              <span className="text-lg">{item.title}</span>
              {expandedIndex === index ? (
                <MdClose className='inline text-dark text-3xl' />
              ) : (
                <MdArrowForward className='inline text-dark text-3xl' />
              )}
            </div>
            {expandedIndex === index && (
              <div className="p-4 bg-gray-200 rounded-lg mt-2">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;