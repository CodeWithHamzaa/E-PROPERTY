import { PropertyCard } from "./PropertyCard";

export const PropertiesList = [ 
    {
        "id": "1",
        "name": "Name-1",
        "address": "123 Main St",
        "city": "Anytown",
        "price": 350000,
        "bedrooms": 3,
        "bathrooms": 2,
        "sqft": 390,
        "rating": 4,
        "image_url": "/property-1.jpg",
    },
    {
        "id": "2",
        "name": "Name-2",
        "address": "456 Maple Ave",
        "city": "Othertown",
        "price": 275000,
        "bedrooms": 4,
        "bathrooms": 3,
        "sqft": 450,
        "rating": 3,
        "image_url": "/property-2.jpg",
    },
    {
        "id": "3",
        "name": "Name-3",
        "address": "789 Oak Dr",
        "city": "Sometown",
        "price": 420000,
        "bedrooms": 5,
        "bathrooms": 4,  
        "sqft": 400,
        "rating": 5,
        "image_url": "/property-3.jpg",
    },
    {
        "id": "4",
        "name": "Name-4",
        "address": "101 Pine St",
        "city": "New City",
        "price": 600000,
        "bedrooms": 4,
        "bathrooms": 3,
        "sqft": 350,
        "rating": 3,
        "image_url": "/property-4.jpg"
    },
    {
        "id": "5",
        "name": "Name-5",
        "address": "202 Birch Rd",
        "city": "Smalltown",
        "price": 450000,
        "bedrooms": 3,
        "bathrooms": 2,
        "sqft": 500,
        "rating": 4,
        "image_url": "/property-5.jpg"
    },
    {
        "id": "6",
        "name": "Name-6",
        "address": "303 Cedar Ln",
        "city": "Countryside",
        "price": 550000,
        "bedrooms": 4,
        "bathrooms": 3,
        "sqft": 480,
        "rating": 2,
        "image_url": "/property-6.jpg"
    },
    {
        "id": "7",
        "name": "Name-7",
        "address": "404 Spruce St",
        "city": "Hillside",
        "price": 380000,
        "bedrooms": 3,
        "bathrooms": 2,
        "sqft": 300,
        "rating": 3,
        "image_url": "/property-7.jpg"
    },
    {
        "id": "8",
        "name": "Name-8",
        "address": "505 Redwood Dr",
        "city": "Woodland",
        "state": "WA",
        "price": 475000,
        "bedrooms": 4,
        "bathrooms": 3,
        "sqft": 500,
        "rating": 4,
        "image_url": "/property-8.jpg",
    },
    {
        "id": "9",
        "name": "Name-9",
        "address": "606 Willow Way",
        "city": "Lakeview",
        "price": 320000,
        "bedrooms": 3,
        "bathrooms": 2,
        "sqft": 400,
        "rating": 5,
        "image_url": "/property-9.jpg",
    },
]

export function Features() {
    return (
        <div className="container pb-20">
            <p className="text-4xl text-center pb-2 font-mono font-extrabold">Featured Properties</p>
            <p className="text-muted-foreground text-center font-sans mb-16">Explore our Exclusive Properties showcasing unparalleled charm, luxurious amenities and prime locations</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20">
                {PropertiesList.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </div>        
        </div>
    );
}