
export type  User= {
    _id:string
    email:string
    name: string
    address: string
    phoneNumber:string
    city :string
}
export type MenuItem = {
    _id: string;
    name: string;
    size: string;
    price: number;
};

export type Store = {
    _id: string;
    user: string; // This should match the user ID type in the schema
    storeName: string; // Changed from restaurantName to storeName
    city: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cakeTypes: string[];
    menuItems: MenuItem[];
    storeImageUrl: string; // Changed from imageUrl to storeImageUrl
    lastUpdated: Date; // Changed from string to Date for consistency
};
