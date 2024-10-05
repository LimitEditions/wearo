import React from 'react';
import { SlPhone, SlEnvolope } from 'react-icons/sl';
import { PiWhatsappLogo, PiTelegramLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';

interface ContactButtonProps {
  telegram?: string;
  whatsapp?: string;
  email?: string;
  phone?: string;
}

export const ContactButtons: React.FC<ContactButtonProps> = ({ telegram, whatsapp, email, phone }) => {
    return (
        <div className="flex items-center justify-between px-20">
            <Link to={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
                <PiWhatsappLogo className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
            </Link>
            <Link to={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer">
                <PiTelegramLogo className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
            </Link>
            <Link to={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                <SlEnvolope className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
            </Link>
            <Link to={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
                <SlPhone className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
            </Link>
        </div>
    );
};
