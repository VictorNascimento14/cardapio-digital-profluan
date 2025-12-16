
import React from 'react';
import type { Screen } from '../types';

interface BottomNavProps {
    activeScreen: Screen;
    setScreen: (screen: Screen) => void;
    cartItemCount: number;
    isCartAnimating: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setScreen, cartItemCount, isCartAnimating }) => (
     <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md z-50">
        <nav className="bg-primary rounded-full shadow-nav h-16 flex items-center justify-around px-2 relative">
            <button onClick={() => setScreen('home')} className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${activeScreen === 'home' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                <span className="material-icons-round">home</span>
            </button>
            <button onClick={() => setScreen('favorites')} className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${activeScreen === 'favorites' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                <span className="material-icons-round">{activeScreen === 'favorites' ? 'favorite' : 'favorite_border'}</span>
            </button>
            <button onClick={() => setScreen('cart')} className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors relative ${activeScreen === 'cart' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'} ${isCartAnimating ? 'animate-jump' : ''}`}>
                <span className="material-icons-round">shopping_cart</span>
                {cartItemCount > 0 && (
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-yellow-400 rounded-full border-2 border-primary"></span>
                )}
            </button>
            <button onClick={() => setScreen('profile')} className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors ${activeScreen === 'profile' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                <span className="material-icons-round">person_outline</span>
            </button>
        </nav>
    </div>
);

export default BottomNav;
