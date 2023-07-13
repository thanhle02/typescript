interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    desc: string;
    status: boolean;
}

const products: Product[] = [
    { id: 1, name: 'Product 1', image: 'https://picsum.photos/100', price: 200, desc: 'Mô tả 1', status: true },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/100', price: 300, desc: 'Mô tả 2', status: false },
    { id: 3, name: 'Product 3', image: 'https://picsum.photos/100', price: 400, desc: 'Mô tả 3', status: true },
];



// Thêm sản phẩm 
function addProduct(newProductData: Product): void {
    products.push(newProductData);
    console.log(" thêm thành công");

};

const newProductData: Product = {
    id: 4,
    name: 'Product 4',
    image: 'https://picsum.photos/100',
    price: 200, desc: 'Mô tả 1',
    status: true,


};
addProduct(newProductData)

// cập nhật sản phẩm 
function updateProduct(id:number| string, updateIfo:object):void{
    const productIndex = products.findIndex(product=> product.id === id);
    if (productIndex !== -1) {
        productIndex[productIndex]={...products[productIndex], ...updateIfo };
        console.log(" sản phẩm đã được cập nhật thành công");
        
        
    } else {
        console.log("không tìm thấy sản phẩm với id đã cho ");
        
        
    }
};
console.log(products);

// xóa sản phẩm 
function removeProduct(idRemove:number| string ):void{
    const index = products.findIndex( product=> product.id === idRemove)

    if (index !== -1) {
        products.splice(index,1);
        console.log(`đã xóa sản phẩm với id ${idRemove}`);
        
        
    } else {
        console.log(` không tìm thấy sản phẩm với id ${idRemove}`);
        
    }
}

