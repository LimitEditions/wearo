import React from 'react'
import { TipModel } from '../../api/data-contracts';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

export const Tips = ({ tips }: {tips: TipModel[] }) => {
  // Настройки для слайдера
  const settings = {
    infinite: true, // Бесконечное листание
    speed: 500, // Скорость анимации
    slidesToShow: 2.5, // Показывать только один слайд за раз
    swipe: true, // Включаем свайп
    arrows: false, // Отключаем стрелки навигации
    adaptiveHeight: true // Адаптируемся под высоту изображений
  };

//  Заглушка для пустых советов
const placeholderTips = [
    {
      guid: 'placeholder1',
      name: 'Tip 1',
      text: 'This is a placeholder tip.',
      files: [{ fileGuid: "/images/defaultPhoto.svg", guid: 'img1' }]
    },
    {
      guid: 'placeholder2',
      name: 'Tip 2',
      text: 'This is another placeholder tip.',
      files: [{ fileGuid: "/images/defaultPhoto.svg", guid: 'img2' }]
    },
    {
      guid: 'placeholder3',
      name: 'Tip 3',
      text: 'Yet another placeholder tip.',
      files: [{ fileGuid: "/images/defaultPhoto.svg", guid: 'img3' }]
    }
  ];

  const displayTips = tips && tips.length > 0 ? tips : placeholderTips;

  return (
    <>
      <Slider {...settings}>
        {displayTips.map(tip => (
          <div key={tip.guid} className={getStyles(tipStyle)}>
            <h3>{tip.name}</h3>
            {tip.files?.map(file => (
                <img 
                key={file.fileGuid}
                src={file.fileGuid}
                alt="file"
                className={getStyles(imgStyle)} 
                />
            ))}
            <p>{tip.text}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};


const tipStyle: BlockStyle = {
  container: 'w-full',
};

const imgStyle: BlockStyle = {
  container: 'w-full h-auto object-contain p-1',
};