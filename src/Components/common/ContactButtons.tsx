import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Button } from './Button';
import { Link } from 'react-router-dom';

interface ContactButtonProps {
  telegram: string;
  whatsapp: string;
  email: string;
}

export const ContactButtons: React.FC<ContactButtonProps> = ({ telegram, whatsapp, email }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Обработчик клика вне компонента
    const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsExpanded(false);
    }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    return (
        <div ref={ref} className="relative flex items-center">
            {!isExpanded ? (
            <Button showButton={true} onClick={() => setIsExpanded(true)}>
                Контакты
            </Button>
            ) : (
            <div className="flex space-x-4 animate-bounce">
                <Link to={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="text-blue-500 w-7 h-7 hover:text-blue-600 transition-all duration-300" />
                </Link>
                <Link to={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-green-500 w-7 h-7 hover:text-green-600 transition-all duration-300" />
                </Link>
                <Link to={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-red-500 w-7 h-7 hover:text-red-600 transition-all duration-300" />
                </Link>
            </div>
            )}
        </div>
    );
};
