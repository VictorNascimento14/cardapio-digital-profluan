
import React, { useState, useEffect, useCallback } from 'react';
import type { Screen, FoodItem, CartItemType } from './types';
import { popularFoods, nearbyFoods, cartItemsData } from './constants';
import HomeScreen from './components/HomeScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import CartScreen from './components/CartScreen';
import FavoritesScreen from './components/FavoritesScreen';

const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [screen, setScreen] = useState<Screen>('home');
    const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
    const [cartItems, setCartItems] = useState<CartItemType[]>(cartItemsData);
    const [favorites, setFavorites] = useState<number[]>([2]); // Start with one favorite for demo
    const [isCartAnimating, setIsCartAnimating] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    }, []);
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    const handleSelectItem = useCallback((item: FoodItem) => {
        setSelectedItem(item);
        setScreen('details');
    }, []);

    const handleUpdateQuantity = useCallback((itemId: number, newQuantity: number) => {
        setCartItems(currentItems =>
            currentItems.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    }, []);

    const handleRemoveItem = useCallback((itemId: number) => {
        setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
    }, []);

    const handleToggleFavorite = useCallback((itemId: number) => {
        setFavorites(prevFavorites => {
            const isFavorited = prevFavorites.includes(itemId);
            if (isFavorited) {
                return prevFavorites.filter(id => id !== itemId);
            } else {
                return [...prevFavorites, itemId];
            }
        });
    }, []);

    const handleAddToCart = useCallback((itemToAdd: FoodItem, quantityToAdd: number = 1) => {
        setCartItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                return currentItems.map(item =>
                    item.id === itemToAdd.id
                        ? { ...item, quantity: item.quantity + quantityToAdd }
                        : item
                );
            }
            return [...currentItems, { ...itemToAdd, quantity: quantityToAdd, extra: 'Padrão' }];
        });
        
        setIsCartAnimating(true);
        setTimeout(() => {
            setIsCartAnimating(false);
        }, 400); // Animation duration

        setToastMessage(`${itemToAdd.name} foi adicionado ao carrinho!`);
        setTimeout(() => {
            setToastMessage(null);
        }, 2500);
    }, []);

    const allFoods = [...popularFoods, ...nearbyFoods];

    const renderScreen = () => {
        const homeScreenProps = {
            theme,
            toggleTheme,
            setScreen,
            onSelectItem: handleSelectItem,
            onAddToCart: handleAddToCart,
            onToggleFavorite: handleToggleFavorite,
            favorites,
            cartItemCount: cartItems.length,
            isCartAnimating,
        };

        const favoritesScreenProps = {
            setScreen,
            allFoods,
            favorites,
            onSelectItem: handleSelectItem,
            onAddToCart: handleAddToCart,
            onToggleFavorite: handleToggleFavorite,
            cartItemCount: cartItems.length,
            isCartAnimating,
        };

        switch (screen) {
            case 'home':
                return <HomeScreen {...homeScreenProps} />;
            case 'details':
                return selectedItem ? (
                    <ProductDetailScreen item={selectedItem} setScreen={setScreen} onAddToCart={handleAddToCart} />
                ) : (
                    <HomeScreen {...homeScreenProps} />
                );
            case 'cart':
                return <CartScreen setScreen={setScreen} cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />;
            case 'favorites':
                return <FavoritesScreen {...favoritesScreenProps} />;
            default:
                return <HomeScreen {...homeScreenProps} />;
        }
    };

    return (
        <div className="w-full max-w-md mx-auto min-h-screen font-sans shadow-2xl relative">
            {renderScreen()}
            {toastMessage && (
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-max bg-gray-900/90 dark:bg-gray-800/90 text-white px-5 py-2.5 rounded-full text-sm shadow-lg z-50 animate-fade-in-down backdrop-blur-sm">
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default App;
