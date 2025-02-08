import React from 'react'
import { FileModel } from '../../api/data-contracts';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

export const Photos = ({ photos, imgSize }: {photos: FileModel[] | null, imgSize?: string}) => {
  // Настройки для слайдера
  const settings = {
    dots: true, // Включаем точки
    infinite: true, // Бесконечное листание
    speed: 500, // Скорость анимации
    slidesToShow: 1, // Показывать только один слайд за раз
    slidesToScroll: 1, // Прокрутка на один слайд за раз
    swipe: true, // Включаем свайп
    arrows: false, // Отключаем стрелки навигации
    adaptiveHeight: true, // Адаптируемся под высоту изображений
    centerMode: true // Центрирование слайдов
  };

 // Заглушка для пустых фото
  const placeholderPhotos = [
    { fileGuid: "/images/defaultPhoto.svg", guid: 'placeholder1' },
    { fileGuid: "/images/defaultPhoto.svg", guid: 'placeholder2' },
    { fileGuid: "/images/defaultPhoto.svg", guid: 'placeholder3' }
  ];
  const displayPhotos = photos && photos.length > 0 ? photos : placeholderPhotos;

  return (
    <>
      <Slider {...settings} dotsClass="slick-dots">
        {displayPhotos.map(photo => (
          <div key={photo.guid} className={'w-full max-h-1/2 bg-gray-100 my-2'}>
            <img src={photos ? `${process.env.REACT_APP_URL_REQUEST}/api/Files/${photo.fileGuid}`: photo.fileGuid} alt="Slide" className={"m-auto" + ' ' + imgSize} />
          </div>
        ))}
      </Slider>
    </>
  );
};

