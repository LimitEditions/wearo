import React, { useState } from "react";
import { FileProductModel } from "../../../api/data-contracts";

interface HighlightedProductsProps {
    products: FileProductModel[];
}

const HighlightedProducts: React.FC<HighlightedProductsProps> = ({ products }) => {
    const [highlightedProds, setHighlightedProds] = useState<FileProductModel[]>([]);

    //свечение отмеченных вещей
    const [isHovered, setIsHovered] = useState(false);
    const toggleHover = (value: boolean) => () => setIsHovered(value);

    const handleProdsBag = () => {
        if (!products) return;
        setHighlightedProds(products);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="absolute top-3 right-4 z-10 w-6 h-6 bg-white rounded-[50px] flex justify-center items-center shadow-lg" onClick={handleProdsBag}
                onMouseEnter={toggleHover(true)}
                onMouseLeave={toggleHover(false)}
                style={{
                    cursor: "pointer",
                    transition: "box-shadow 0.3s ease-in-out",
                    boxShadow: isHovered ? "0 0 10px rgba(255, 255, 255, 1)" : "none"
                }}>
                <img src="/images/bag.svg" alt="отмеченные изделия" />
            </div>

            {/* Рендер изделий */}
            {products.map((product) => (
                <div key={product.guid} className="relative">
                    {/* Изделие */}
                    <img src={`/api/Files/${product.guid}`} alt="Изделие" className="w-32 h-32" />

                    {/* Проверяем, нужно ли подсвечивать изделие */}
                    {highlightedProds.some((p) => p.guid === product.guid) && (
                        <div
                            className="absolute flex flex-col items-center"
                            style={{
                                left: `${product.x || 50}%`,
                                top: `${product.y || 50}%`,
                                transform: "translate(-50%, -100%)",
                            }}
                        >
                            <div className="w-3 h-3 bg-red-500 rounded-full shadow-md"></div>
                            <div className="mt-1 bg-white text-xs p-1 rounded-md shadow-md border">
                                {product.productGuid ?? "Без названия"}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HighlightedProducts;
