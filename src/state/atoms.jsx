import { atom } from 'recoil';

export const recipesState = atom({
    key:'recipesState',
    default: [],
});


// For Wishlist state apparance
export const wishlistDisplayState = atom ({
    key: 'wishlistDisplaySate',
    default: false,
});