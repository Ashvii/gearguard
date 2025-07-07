import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className='border border-red-500 p-5'>
          <h2 className="text-lg font-semibold mb-2">WRITE TO US</h2>
          <p className="text-sm">info@GearGuard</p>
        </div>

        <div className='border border-red-500 p-5'>
          <h2 className="text-lg font-semibold mb-2">CALL US</h2>
          <p className="text-sm">@6456546541</p>
        </div>

        <div className='border border-red-500 p-5'>
          <h2 className="text-lg font-semibold mb-2">FOLLOW US</h2>
          <div className="flex justify-center md:justify-start gap-4 text-xl mt-2">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm space-y-4">
        <p className="space-x-2">
          <span>  Terms & Conditions</span> |
          <span>  Privacy Policy</span> |
          <span>  Refund Policy</span>
        </p>


        <div>
          <h2 className="font-semibold">REGISTERED OFFICE</h2>
          <p>
            Bldg No: 34/678 (C2), Ground Floor, Crystal Plaza,<br />
            Seaport-Airport Road, Chittethukara P.O, Kakkanad, <br />
            Ernakulam – 682037, Kerala, India
          </p>
        </div>

        <p className="text-gray-400">
          © 2025 GearGuard Solutions Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
