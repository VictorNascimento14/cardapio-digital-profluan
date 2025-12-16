
import React from 'react';
import type { FoodItem } from '../types';

interface FoodCardProps {
    item: FoodItem;
    onSelect: (item: FoodItem) => void;
    onAddToCart: (item: FoodItem) => void;
    onToggleFavorite: (itemId: number) => void;
    isFavorite: boolean;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, onSelect, onAddToCart, onToggleFavorite, isFavorite }) => (
    <div
        className="bg-surface-light dark:bg-surface-dark p-3 pb-4 rounded-2xl shadow-soft relative group cursor-pointer"
        onClick={() => onSelect(item)}
    >
        <button
            onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(item.id);
            }}
            className={`absolute top-3 right-3 transition-colors z-10 ${isFavorite ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
            aria-label={isFavorite ? 'Desfavoritar' : 'Favoritar'}
        >
            <span className="material-icons-round text-lg">{isFavorite ? 'favorite' : 'favorite_border'}</span>
        </button>
        <div className="h-28 w-full flex items-center justify-center mb-2">
            <img alt={item.name} className="w-24 h-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300 rounded-xl" src={item.image} />
        </div>
        <h3 className="font-bold text-text-light dark:text-text-dark text-base truncate">{item.name}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{item.category}</p>
        <div className="flex justify-between items-center">
            <span className="font-bold text-text-light dark:text-text-dark text-sm">R$ {item.price.toFixed(2)}</span>
            <button
                className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white shadow-md active:scale-90 transition-transform"
                onClick={(e) => { e.stopPropagation(); onAddToCart(item); }}
                aria-label="Adicionar ao carrinho"
            >
                <span className="material-icons-round text-sm">add</span>
            </button>
        </div>
    </div>
);

export default FoodCard;