CREATE TABLE Categorias
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE Productos 
(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    idCategoria INT,
	stock INT NOT NULL DEFAULT 0,
	descripcion TEXT,
	price DECIMAL(10,2),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idCategoria) REFERENCES Categorias(id)
);

INSERT INTO Categorias (name) VALUES
('Electrónica'),
('Hogar'),
('Computación'),
('Ropa'),
('Deportes'),
('Juguetes'),
('Libros'),
('Alimentos'),
('Salud'),
('Mascotas');

INSERT INTO Productos (name, idCategoria, stock, descripcion, price) VALUES
('Auriculares Bluetooth', 1, 25, 'Auriculares inalámbricos con cancelación de ruido', 18999.99),
('Lámpara LED de Escritorio', 2, 40, 'Lámpara regulable con luz cálida y fría', 7499.50),
('Teclado Mecánico', 3, 15, 'Teclado mecánico RGB con switches blue', 32500.00),
('Remera Algodón', 4, 60, 'Remera 100% algodón, talle unisex', 8999.99),
('Pelota de Fútbol', 5, 30, 'Pelota profesional tamaño 5', 15999.00),
('Set de Bloques', 6, 20, 'Bloques de construcción para niños', 12999.90),
('Novela Fantasía', 7, 12, 'Libro de fantasía épica, tapa blanda', 10999.00),
('Café Molido 500g', 8, 50, 'Café molido premium tostado medio', 6799.99),
('Vitaminas C', 9, 80, 'Suplemento vitamínico con vitamina C', 4599.00),
('Alimento para Gato 3kg', 10, 35, 'Balanceado premium para gatos adultos', 18999.00);