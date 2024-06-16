import React, { useState } from 'react';
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Button } from './Button';


interface ContactButtonProps {
    telegram: string;
    whatsapp: string;
    email: string;
}

export const ContactButtons: React.FC<ContactButtonProps> = ({ telegram, whatsapp, email }) => {
    const [isExpanded, setIsExpanded] = useState(false);



    return (
        <div className="relative">
            {!isExpanded ? (
                <Button
                    showButton={true}
                    onClick={() => setIsExpanded(true)}
                    
                    >
                    Контакты
                </Button>
            ) : (
                <div className="flex space-x-4">
                <a href={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="text-blue-500 w-8 h-8 hover:text-blue-600 transition-all duration-300" />
                </a>
                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-green-500 w-8 h-8 hover:text-green-600 transition-all duration-300" />
                </a>
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-red-500 w-8 h-8 hover:text-red-600 transition-all duration-300" />
                </a>
                </div>
            )}
        </div>
    );
};
