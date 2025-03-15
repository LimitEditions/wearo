import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Photo } from '../common/Photo';
import { ClothingCollectionModel } from '../../api/data-contracts';

export const SingleSlideSlider = ({ collections }: {collections: ClothingCollectionModel[]}) => {
    const settingsSlider = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Slider {...settingsSlider}>
            {collections?.map((col) => {
                return (
                    <Link
                        to={`../../collection/${col.guid}`}
                        key={col.guid}
                        className="relative text-center"
                    >
                        <Photo 
                            id={null}
                            styles="w-full h-[180px] object-cover"
                            alt="Колекция бренда" 
                        />
                        <p className="text-[20px] leading-[120%] m-auto absolute top-[60%] left-[50%] translate-x-[-50%]">
                            {col.name}
                        </p>
                    </Link>
                );
            })}
        </Slider>
    );
};
