import { RowDataPacket } from 'mysql2';
import pool from '../config/mysql';


export interface Producto {
    id: number;
    name: string;
    idCategoria: number;
    stock: number;
    descripcion: string;
    price: number;
};

export interface CreateProductDTO {
    name: string;
    idCategoria: number;
    stock: number;
    descripcion: string;
    price: number;
}

export type ProductRow = Producto & RowDataPacket;

export const listProducts = async (): Promise<Producto[]> => {
    const [rows] = await pool.query<ProductRow[]>(`
    SELECT p.id, p.name, p.price, p.stock, p.idCategoria, p.descripcion FROM Productos p
  `);

    return rows;
}

export const getProductById = async (id: number): Promise<Producto | null> => {
    const row = await pool.query<ProductRow[]>(`
    SELECT p.id, p.name, p.price, p.stock, p.idCategoria, p.descripcion FROM Productos p
    WHERE p.id = ?
  `, [id]).then(([rows]) => rows[0]);
    return row;
}

export const createProduct = async (producto: CreateProductDTO): Promise<Producto> => {
    const result = await pool.query(`
    INSERT INTO Productos (name, price, stock, idCategoria, descripcion)
    VALUES (?, ?, ?, ?, ?)
  `, [producto.name, producto.price, producto.stock, producto.idCategoria, producto.descripcion]);

    const insertId = (result[0] as any).insertId;

    const productoCreado = await getProductById(insertId);
    if (!productoCreado) {
        throw new Error('Error al crear el producto');
    }
    return productoCreado;
}

export const updateProduct = async (producto: Producto): Promise<Producto> => {
    await pool.query(`
    UPDATE Productos
    SET name = ?, price = ?, stock = ?, idCategoria = ?, descripcion = ?
    WHERE id = ?
  `, [producto.name, producto.price, producto.stock, producto.idCategoria, producto.descripcion, producto.id]);

    const productoActualizado = await getProductById(producto.id);
    if (!productoActualizado) {
        throw new Error('Error al actualizar el producto');
    }
    return productoActualizado;
}

export const deleteProduct = async (id: number): Promise<void> => {
    await pool.query(`
    DELETE FROM Productos
    WHERE id = ?
  `, [id]);
}