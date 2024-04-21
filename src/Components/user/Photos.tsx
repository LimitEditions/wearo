import React from 'react'
import { FileModel } from '../../api/data-contracts';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

export const Photos = ({ photos }: {photos: FileModel[] | null | undefined}) => {
  // Настройки для слайдера
  const settings = {
    dots: true, // Включаем точки
    infinite: true, // Бесконечное листание
    speed: 500, // Скорость анимации
    slidesToShow: 1, // Показывать только один слайд за раз
    slidesToScroll: 1, // Прокрутка на один слайд за раз
    swipe: true, // Включаем свайп
    arrows: false, // Отключаем стрелки навигации
    adaptiveHeight: true // Адаптируемся под высоту изображений
  };

 // Заглушка для пустых фото
  const placeholderPhotos = [
    { fileGuid: 'https://via.placeholder.com/150?text=1', guid: 'placeholder1' },
    { fileGuid: 'https://via.placeholder.com/150?text=2', guid: 'placeholder2' },
    { fileGuid: 'https://via.placeholder.com/150?text=3', guid: 'placeholder3' }
  ];
  const displayPhotos = photos && photos.length > 0 ? photos : placeholderPhotos;

  return (
    <>
      <Slider {...settings} dotsClass="slick-dots">
        {displayPhotos.map(photo => (
          <div key={photo.guid} className={getStyles(photoStyle)}>
            <img src={`http://vne.su:8081/api/Files/${photo.fileGuid}`} alt="Slide" className={getStyles(imgStyle)} />
          </div>
        ))}
      </Slider>
    </>
  );
};


const photoStyle: BlockStyle = {
  container: 'w-full max-h-1/2',
  spacing: 'my-2',
};

const imgStyle: BlockStyle = {
  container: 'w-full h-auto object-contain',
};
