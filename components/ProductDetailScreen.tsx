
import React, { useState } from 'react';
import type { Screen, FoodItem } from '../types';

interface ProductDetailScreenProps {
    item: FoodItem;
    setScreen: (screen: Screen) => void;
    onAddToCart: (item: FoodItem, quantity: number) => void;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ item, setScreen, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    const handleAddToCartClick = () => {
        onAddToCart(item, quantity);
    };

    return (
        <div className="relative w-full h-full bg-background-light dark:bg-background-dark overflow-y-auto overflow-x-hidden flex flex-col">
            <style>{`.curved-header { border-bottom-left-radius: 50% 20%; border-bottom-right-radius: 50% 20%; }`}</style>
            <div className="relative w-full h-[45%] bg-primary curved-header shrink-0">
                <div className="absolute top-0 left-0 w-full p-6 pt-12 flex justify-between items-center z-10 text-white">
                    <button onClick={() => setScreen('home')} className="bg-white text-primary dark:bg-surface-dark dark:text-white p-2 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-95">
                        <span className="material-icons-round text-xl">chevron_left</span>
                    </button>
                    <button className="text-white p-2 rounded-full transition-opacity hover:opacity-80">
                        <span className="material-icons-round text-xl">more_vert</span>
                    </button>
                </div>
                <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-72 md:h-72 z-10">
                    <img alt={item.name} className="w-full h-full object-cover rounded-full shadow-2xl drop-shadow-2xl animate-fade-in-up border-4 border-white dark:border-surface-dark" src={item.image} />
                </div>
            </div>
            <div className="flex-1 px-6 pt-16 pb-32 flex flex-col space-y-4">
                <div className="flex justify-between items-start mt-2">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{item.name}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{item.category}</p>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-primary">R$ {item.price.toFixed(2)}</span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium shadow-md transition-all hover:brightness-110 text-sm">
                        Detalhes
                    </button>
                    <button className="flex-1 bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-300 py-3 rounded-xl font-medium shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
                        Avaliações
                    </button>
                </div>
                <div className="mt-6">
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description} <span className="text-primary font-semibold cursor-pointer">Ver mais.</span>
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
                        <span className="material-icons-round text-orange-400 text-xl mb-1">star</span>
                        <p className="text-xs text-gray-800 dark:text-white font-bold">{item.rating}</p>
                        <p className="text-[10px] text-gray-400">Nota</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
                        <span className="material-icons-round text-red-400 text-xl mb-1">local_fire_department</span>
                        <p className="text-xs text-gray-800 dark:text-white font-bold">{item.calories} Kcal</p>
                        <p className="text-[10px] text-gray-400">Calorias</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700">
                        <span className="material-icons-round text-blue-400 text-xl mb-1">schedule</span>
                        <p className="text-xs text-gray-800 dark:text-white font-bold">{item.deliveryTime}</p>
                        <p className="text-[10px] text-gray-400">Min</p>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white dark:bg-surface-dark p-6 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-gray-50 dark:border-gray-700 z-20">
                <div className="flex items-center justify-between space-x-6">
                    <div className="flex items-center space-x-4 bg-gray-50 dark:bg-background-dark rounded-full px-2 py-2">
                        <button onClick={decrement} className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md active:bg-red-800 transition-colors">
                            <span className="material-icons-round text-lg">remove</span>
                        </button>
                        <span className="text-lg font-bold text-gray-900 dark:text-white w-4 text-center">{quantity}</span>
                        <button onClick={increment} className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md active:bg-red-800 transition-colors">
                            <span className="material-icons-round text-lg">add</span>
                        </button>
                    </div>
                    <button onClick={handleAddToCartClick} className="flex-1 bg-primary text-white py-4 rounded-full font-semibold shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
                        <span>Adicionar ao Carrinho</span>
                        <span className="material-icons-round text-sm opacity-80">shopping_bag</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailScreen;
