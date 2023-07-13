var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { id: 1, name: 'Product 1', image: 'https://picsum.photos/100', price: 200, desc: 'Mô tả 1', status: true },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/100', price: 300, desc: 'Mô tả 2', status: false },
    { id: 3, name: 'Product 3', image: 'https://picsum.photos/100', price: 400, desc: 'Mô tả 3', status: true },
];
// Thêm sản phẩm 
// function addProduct(newProductData) {
//     products.push(newProductData);
//     console.log(" thêm thành công");
// }
// ;
// var newProductData = {
//     id: 4,
//     name: 'Product 4',
//     image: 'https://picsum.photos/100',
//     price: 200, desc: 'Mô tả 1',
//     status: true,
// };
// addProduct(newProductData);
// cập nhật sản phẩm 
function updateProduct(id, updateIfo) {
    var productIndex = products.findIndex(function (product) { return product.id === id; });
    if (productIndex !== -1) {
        productIndex[productIndex] = __assign(__assign({}, products[productIndex]), updateIfo);
        console.log(" sản phẩm đã được cập nhật thành công");
    }
    else {
        console.log("không tìm thấy sản phẩm với id đã cho ");
    }
};
updateProduct(2, {name:"New Name", price:100});
console.log(products);

// console.log(products);
// xóa sản phẩm 
function removeProduct(idRemove) {
    var index = products.findIndex(function (product) { return product.id === idRemove; });
    if (index !== -1) {
        products.splice(index, 1);
        console.log("\u0111a\u0303 xo\u0301a sa\u0309n ph\u00E2\u0309m v\u01A1\u0301i id ".concat(idRemove));
    }
    else {
        console.log(" kh\u00F4ng ti\u0300m th\u00E2\u0301y sa\u0309n ph\u00E2\u0309m v\u01A1\u0301i id ".concat(idRemove));
    }
}
