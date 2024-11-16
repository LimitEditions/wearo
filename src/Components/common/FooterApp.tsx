import React from 'react';
import { Footer } from 'flowbite-react';
import moment from 'moment';

const LINKS = [
    {
        href: 'https://fasie.ru/',
        src: '/images/fsi.svg',
        alt: 'fasie',
        size: 'w-16 h-16'
    },
    {
        href: 'https://github.com/Tarasoft-a/',
        src: '/images/tarasoft.svg',
        alt: 'tarasoft',
        size: 'w-24 h-24'
    },
    {
        href: 'https://wearo.online/',
        src: '/images/wearo-logo.svg',
        alt: 'wearo',
        size: 'w-16 h-16'
    }
];
const TEXT_FSI = 
    `Сервис создан при поддержке гранта Фонда содействия инновациям, 
    предоставленного в рамках программы «Студенческий стартап» федерального 
    проекта «Платформа университетского технологического предпринимательства»`;
const YEAR = Number(moment().format('YYYY'));

export const FooterApp = () => {
    return (
        <Footer className='px-2 py-0 bg-white-fon'>
            <Footer.Divider/>
            <p className=' text-gray-500 text-justify text-xs'>{TEXT_FSI}</p>
            <Footer.LinkGroup className='flex items-center justify-center space-x-4'>
                {
                    LINKS.map((link, i) => {
                        return <Footer.Link 
                                    key={i} 
                                    href={link.href} 
                                    target='_blank'>
                                        <img 
                                            src={link.src} 
                                            alt={link.alt} 
                                            className={link.size}
                                        />
                                </Footer.Link>
                    })
                }
            </Footer.LinkGroup>
            <Footer.Copyright by=' TARASOFT — All Rights Reserved.' year={ YEAR } className='w-full text-end text-xs'/>
        </Footer>
    );
};
