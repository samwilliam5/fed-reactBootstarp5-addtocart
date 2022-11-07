// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to
import img1 from './components/image/x3-pro-mzb08t9in-poco-original-imag52znesm3hemf.jpg'
import img2 from './components/image/poco-x3-mzb07z2in-original-imafvt3hz54npsba.webp'
import img3 from './components/image/-original-imagbmf2gztrhvzr.webp'
import img4 from './components/image/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99fp4qdfby.webp'
import img5 from './components/image/-original-imagagnfgh6ed7tp.webp'
import img6 from './components/image/-original-imagc7ukmgugpdfy.webp'
const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Poco X3 Pro",
        price: 18000,
        image: img1
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Poco X3",
        price: 16000,
        image: img2
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "RealMe 9 Pro 5G ",
        price: 19000,
        image: img3,
    },
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "SAMSUNG Galaxy F22",
        price: 12000,
        image: img4
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "RealMe 9i",
        price: 13500,
        image: img5
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "RealMe C35",
        price: 39.99,
        image: img6
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };