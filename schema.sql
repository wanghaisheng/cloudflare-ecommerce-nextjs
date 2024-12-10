-- Drop the Products table if it exists
DROP TABLE IF EXISTS Products;

-- Create the Products table
CREATE TABLE Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    rating REAL CHECK (rating >= 0 AND rating <= 5),
    price REAL NOT NULL CHECK (price >= 0),
    category TEXT,
    imageUrl TEXT
);

-- Insert data into the Products table
INSERT INTO Products (name, description, rating, price, category, imageUrl) 
VALUES
('Modern Laptop', 'The Nova X5 is a powerful and portable laptop that combines exceptional performance with sleek design. Featuring a fast 14-inch Full HD display and up to 10 hours of battery life, this laptop is perfect for both work and play. Equipped with an 11th Gen Intel Core processor and 16GB of RAM, you can multitask with ease and stay productive on the go.', 4.5, 1225.99, 'Electronics', 'https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/393defea-8ee6-46c7-971f-df55f24a7700/public'),
('4k Television', 'Imagine immersing yourself in stunning high-definition visuals and rich, immersive sound with our latest 4K Smart TV. With a vibrant 65-inch display and advanced picture processing technology, this TV brings you crystal-clear viewing experience, perfect for streaming your favorite shows, movies, or playing video games.', 4.8, 1399.99, 'Electronics', 'https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/f2cf1abd-3995-4b8c-0c24-99b82e4aac00/public'),
('Gaming Keyboard', 'The Immortal Vortex Gaming Keyboard is a high-performance keyboard designed to elevate your gaming experience. Featuring customizable backlighting, macro keys, and a tactile N-key rollover switch design, this keyboard provides precise control and speed for seamless gameplay, while its ergonomic layout and cushioned wrist rest ensure comfort and durability.', 4.7, 29.99, 'Accessories', 'https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/4e290265-b01d-43d9-0b49-b891fcdaf100/public'),
('Watch', 'The NovaTime is a sleek and stylish timepiece that combines classic design with cutting-edge technology. This water-resistant watch features a high-contrast display and advanced motion tracking sensors, allowing you to easily monitor your daily activity, heart rate, and sleep patterns in style.', 4.6, 499.99, 'Accessories', 'https://imagedelivery.net/llMDWXFPgX44M9elMfQ9XA/36b74004-c669-4572-b505-6384c000bd00/public');
