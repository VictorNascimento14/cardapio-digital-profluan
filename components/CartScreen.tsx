
import React from 'react';
import type { Screen, CartItemType } from '../types';

interface CartScreenProps {
    setScreen: (screen: Screen) => void;
    cartItems: CartItemType[];
    onUpdateQuantity: (itemId: number, newQuantity: number) => void;
    onRemoveItem: (itemId: number) => void;
}

const CartItem: React.FC<{ item: CartItemType; onUpdateQuantity: (itemId: number, newQuantity: number) => void; onRemoveItem: (itemId: number) => void; }> = ({ item, onUpdateQuantity, onRemoveItem }) => {
    
    const handleDecrement = () => {
        if (item.quantity > 1) {
            onUpdateQuantity(item.id, item.quantity - 1);
        } else {
            onRemoveItem(item.id);
        }
    };

    const handleIncrement = () => {
        onUpdateQuantity(item.id, item.quantity + 1);
    };

    return (
        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm flex items-center gap-4 animate-fade-in-up">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden relative">
                <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-semibold text-lg leading-tight text-text-light dark:text-text-dark">{item.name}</h3>
                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark mt-1">{item.extra}</p>
                    </div>
                    <button onClick={() => onRemoveItem(item.id)} className="text-primary hover:text-red-700 transition-colors">
                        <span className="material-icons-round text-lg">close</span>
                    </button>
                </div>
                <div className="flex justify-between items-end mt-3">
                    <span className="font-bold text-lg text-primary">R$ {item.price.toFixed(2)}</span>
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 gap-3">
                        <button onClick={handleDecrement} className="w-6 h-6 rounded-full bg-white dark:bg-gray-700 text-primary flex items-center justify-center shadow-sm text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-600">-</button>
                        <span className="text-sm font-medium w-3 text-center text-text-light dark:text-text-dark">{item.quantity}</span>
                        <button onClick={handleIncrement} className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm text-sm font-bold hover:bg-red-800">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CartScreen: React.FC<CartScreenProps> = ({ setScreen, cartItems, onUpdateQuantity, onRemoveItem }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const delivery = 5.00;
    const tax = subtotal * 0.05;
    const total = subtotal + delivery + tax;

    return (
        <div className="w-full h-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen relative overflow-hidden flex flex-col">
            <header className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-20">
                <button onClick={() => setScreen('home')} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-text-light dark:text-text-dark transition-colors">
                    <span className="material-icons-round text-xl">arrow_back_ios_new</span>
                </button>
                <h1 className="text-xl font-semibold">Meu Carrinho</h1>
                <button className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-primary transition-colors relative">
                    <span className="material-icons-round text-xl">notifications_none</span>
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-surface-dark"></span>
                </button>
            </header>
            <main className="flex-1 overflow-y-auto px-6 pb-32 hide-scrollbar">
                {cartItems.length > 0 ? (
                    <>
                        <div className="space-y-5 mt-2">
                            {cartItems.map(item => <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} onRemoveItem={onRemoveItem} />)}
                        </div>
                        <div className="mt-8 mb-6">
                            <div className="flex gap-3">
                                <div className="flex-1 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm px-4 py-3 flex items-center gap-2 border border-transparent focus-within:border-primary transition-colors">
                                    <span className="material-icons-round text-text-sub-light dark:text-text-sub-dark">local_offer</span>
                                    <input className="bg-transparent border-none outline-none w-full text-sm text-text-light dark:text-text-dark placeholder-text-sub-light dark:placeholder-text-sub-dark focus:ring-0 p-0" placeholder="Código Promocional" type="text" />
                                </div>
                                <button className="bg-primary text-white px-6 rounded-xl font-medium text-sm shadow-lg shadow-red-500/30 hover:bg-red-800 transition-colors">Aplicar</button>
                            </div>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-text-sub-light dark:text-text-sub-dark">Subtotal</span>
                                <span className="font-semibold text-text-light dark:text-text-dark">R$ {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-text-sub-light dark:text-text-sub-dark">Entrega</span>
                                <span className="font-semibold text-text-light dark:text-text-dark">R$ {delivery.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-text-sub-light dark:text-text-sub-dark">Taxa (5%)</span>
                                <span className="font-semibold text-text-light dark:text-text-dark">R$ {tax.toFixed(2)}</span>
                            </div>
                            <div className="my-3 border-t border-dashed border-gray-200 dark:border-gray-700"></div>
                            <div className="flex justify-between items-center text-lg">
                                <span className="font-semibold">Total</span>
                                <span className="font-bold text-primary">R$ {total.toFixed(2)}</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-text-sub-light dark:text-text-sub-dark mt-16">
                         <span className="material-icons-round text-6xl mb-4 text-gray-300 dark:text-gray-600">production_quantity_limits</span>
                        <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Seu carrinho está vazio</h2>
                        <p className="mt-2 text-sm max-w-xs">Parece que você ainda não adicionou nada. Que tal explorar nossas opções?</p>
                        <button onClick={() => setScreen('home')} className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-500/30 hover:bg-red-800 transition-colors">
                            Ver cardápio
                        </button>
                    </div>
                )}
            </main>
            {cartItems.length > 0 && (
                <div className="absolute bottom-0 left-0 w-full px-6 pb-8 pt-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark z-10">
                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Prosseguir para o Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartScreen;