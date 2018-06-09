(function(){
    interface IProduct{
        id: number;
        title: string;
        imgUrl: string;
        price: number;
    }
    interface ICartItem{
        id: number;
        productId: number;
        quantity: number;
    }

    class Cart{
        private items: Array<ICartItem> = [];
        addToCart(productId: number){

        }
        getCartItems(){

        }
        getTotalNumberOfItems(){

        }
        renderCartBox(){

        }
    }

    class ProductList{
        constructor(public list: Array<IProduct>){

        }
        renderList(){

        }
    }

    const products: Array<IProduct> = [
        {
            id: 1,
            title: 'Malabar Biriyani',
            imgUrl: 'https://i.imgur.com/ULHbPTa.jpg',
            price: 100
        },
        {
            id: 2,
            title: 'Pasta',
            imgUrl: 'https://i.imgur.com/r7rQBCS.jpg',
            price: 200
        },
        {
            id: 3,
            title: 'Chicken Fried Rice',
            imgUrl: 'https://i.imgur.com/pYSgtB4.jpg',
            price: 250
        },
        {
            id: 4,
            title: 'Chicken Noodles',
            imgUrl: 'https://i.imgur.com/6VY0ci9.png',
            price: 250
        }
    ];


})();