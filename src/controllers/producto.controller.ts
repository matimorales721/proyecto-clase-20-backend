import { Request, Response } from 'express';
import * as productService from '../services/producto.service';
import { CreateProductDTO, Producto } from '../model/producto.model';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.listProducts();

        res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const idNumber = Number(req.params.id);
        const product = await productService.getProductById(idNumber);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ product });

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
};

export const cargarProducto = async (req: Request, res: Response) => {
    try {
        const { name, idCategoria, stock, descripcion, price } = req.body;

        const producto: CreateProductDTO = {
            name,
            price: Number(price),
            stock: Number(stock),
            idCategoria: Number(idCategoria),
            descripcion
        };

        const newProduct = await productService.createProduct(producto);

        res.status(201).json({ newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error al cargar el producto' });
    }
}

export const actualizarProducto = async (req: Request, res: Response) => {
    try {
        const { id, name, idCategoria, stock, descripcion, price } = req.body;

        const productoModificado: Producto = {
            id: Number(id),
            name,
            idCategoria: Number(idCategoria),
            stock: Number(stock),
            descripcion,
            price: Number(price)
        };

        const updatedProduct = await productService.updateProduct(productoModificado);

        res.status(200).json({ updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
};

export const eliminarProducto = async (req: Request, res: Response) => {
    try {
        const idNumber = Number(req.params.id);
        await productService.deleteProduct(idNumber);

        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};