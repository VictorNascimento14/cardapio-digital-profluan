
import React from 'react';
import type { Screen, FoodItem } from '../types';
import { popularFoods, nearbyFoods } from '../constants';
import FoodCard from './FoodCard';
import BottomNav from './BottomNav';

interface HomeScreenProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    setScreen: (screen: Screen) => void;
    onSelectItem: (item: FoodItem) => void;
    onAddToCart: (item: FoodItem, quantity?: number) => void;
    onToggleFavorite: (itemId: number) => void;
    favorites: number[];
    cartItemCount: number;
    isCartAnimating: boolean;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ theme, toggleTheme, setScreen, onSelectItem, onAddToCart, onToggleFavorite, favorites, cartItemCount, isCartAnimating }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen pb-24">
            <header className="px-6 pt-12 pb-4 flex justify-end items-center bg-background-light dark:bg-background-dark sticky top-0 z-10">
                 <div className="flex items-center gap-2">
                    <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center shadow-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        <span className="material-icons-round text-xl">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center shadow-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        <span className="material-icons-round text-xl">notifications_none</span>
                    </button>
                 </div>
            </header>
            <main className="px-6 relative z-0">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold leading-tight text-gray-800 dark:text-white">
                        Escolha Sua <br />
                        Comida <span className="text-primary">Favorita</span>
                    </h1>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="flex-1 bg-white dark:bg-surface-dark rounded-2xl shadow-soft flex items-center px-4 py-3">
                        <span className="material-icons-round text-gray-400 text-2xl mr-3">search</span>
                        <input className="bg-transparent border-none outline-none w-full text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:ring-0" placeholder="Pesquisar" type="text" />
                    </div>
                    <button className="bg-primary w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                        <span className="material-icons-round">tune</span>
                    </button>
                </div>
                <div className="flex overflow-x-auto gap-3 pb-2 mb-6 hide-scrollbar">
                    {['Todos', 'Pizza', 'Hambúrguer', 'Sanduíche', 'Acompanhamento', 'Sushi'].map((cat, i) => (
                        <button key={cat} className={`${i === 0 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800'} px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors`}>
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">Comida Popular</h2>
                    <button className="text-sm font-medium text-primary hover:text-primary-light">Ver Tudo</button>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {popularFoods.map(item => <FoodCard key={item.id} item={item} onSelect={onSelectItem} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={favorites.includes(item.id)} />)}
                </div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">Mais Próximo</h2>
                    <button className="text-sm font-medium text-primary hover:text-primary-light">Ver Tudo</button>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-20">
                     {nearbyFoods.map(item => <FoodCard key={item.id} item={item} onSelect={onSelectItem} onAddToCart={onAddToCart} onToggleFavorite={onToggleFavorite} isFavorite={favorites.includes(item.id)} />)}
                </div>
            </main>
            <BottomNav activeScreen='home' setScreen={setScreen} cartItemCount={cartItemCount} isCartAnimating={isCartAnimating} />
        </div>
    );
};

export default HomeScreen;
