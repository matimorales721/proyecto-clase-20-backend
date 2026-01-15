import * as productModel from '../model/producto.model';
import { CreateProductDTO, Producto } from '../model/producto.model';

export const listProducts = async () => {
    return await productModel.listProducts();
}

export const getProductById = async (id: number) => {
    return await productModel.getProductById(id);
}

export const createProduct = async (producto: CreateProductDTO) => {
    return await productModel.createProduct(producto);
}

export const updateProduct = async (producto: Producto) => {
    return await productModel.updateProduct(producto);
}

export const deleteProduct = async (id: number) => {
    return await productModel.deleteProduct(id);
}
