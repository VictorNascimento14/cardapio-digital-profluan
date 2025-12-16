
import React from 'react';
import type { Screen, FoodItem } from '../types';
import FoodCard from './FoodCard';
import BottomNav from './BottomNav';

interface FavoritesScreenProps {
    setScreen: (screen: Screen) => void;
    allFoods: FoodItem[];
    favorites: number[];
    onSelectItem: (item: FoodItem) => void;
    onAddToCart: (item: FoodItem, quantity?: number) => void;
    onToggleFavorite: (itemId: number) => void;
    cartItemCount: number;
    isCartAnimating: boolean;
}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
    setScreen,
    allFoods,
    favorites,
    onSelectItem,
    onAddToCart,
    onToggleFavorite,
    cartItemCount,
    isCartAnimating,
}) => {
    const favoriteItems = allFoods.filter(item => favorites.includes(item.id));

    return (
        <div className="w-full h-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen relative overflow-hidden flex flex-col">
            <header className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-20">
                <button onClick={() => setScreen('home')} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-text-light dark:text-text-dark transition-colors">
                    <span className="material-icons-round text-xl">arrow_back_ios_new</span>
                </button>
                <h1 className="text-xl font-semibold">Meus Favoritos</h1>
                <div className="w-10 h-10"></div> {/* Spacer */}
            </header>
            <main className="flex-1 overflow-y-auto px-6 pb-24 hide-scrollbar">
                {favoriteItems.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        {favoriteItems.map(item => (
                            <FoodCard
                                key={item.id}
                                item={item}
                                onSelect={onSelectItem}
                                onAddToCart={onAddToCart}
                                onToggleFavorite={onToggleFavorite}
                                isFavorite={favorites.includes(item.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-text-sub-light dark:text-text-sub-dark mt-16">
                        <span className="material-icons-round text-6xl mb-4 text-gray-300 dark:text-gray-600">favorite_border</span>
                        <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Nenhum favorito ainda</h2>
                        <p className="mt-2 text-sm max-w-xs">Clique no coração de um item para adicioná-lo aqui.</p>
                        <button onClick={() => setScreen('home')} className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-500/30 hover:bg-red-800 transition-colors">
                            Explorar comidas
                        </button>
                    </div>
                )}
            </main>
            <BottomNav activeScreen='favorites' setScreen={setScreen} cartItemCount={cartItemCount} isCartAnimating={isCartAnimating} />
        </div>
    );
};

export default FavoritesScreen;
