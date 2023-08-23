//burada useCallback ve React memo bizim sayfada gereksiz renderlardan kurtulmamızı sağlar



"use client"
import React, {useCallback, useState} from "react";
import styles from "./style.module.css";

const phones = [
    { name: "iPhone 12", price: 14000 },
    { name: "Galaxy S20", price: 6500 },
    { name: "Huawei P40", price: 10000 },
];

const CallbackandMemo = () => {
    const [products] = useState(phones);
    const [cart, setCart] = useState([]);

    const addToCart = useCallback((product) => {
        setCart((cart) => [...cart, product]);
    },[]);

    const emptyCart =useCallback(() => {
        setCart([]);
    },[]) ;

    return (
        <div className={styles.wrapper}>
            <Products products={products} addToCart={addToCart} />
            <Cart cart={cart} emptyCart={emptyCart} />
        </div>
        // sepete ekleme işinde addtocart prop olarak productsta var o yüzden products rerender olur  addtocart değişmiyor bunu reacte bildirmek lazım
    );
};

const Products = React.memo(({ products, addToCart }) => {
    return (
        <>
            <h1>Ürünler</h1>
            <div className={styles.products}>
                {products.map(({ name, price }) => (
                    <Product key={name} name={name} price={price} addToCart={addToCart} />
                ))}
            </div>
        </>
    );
});

const Cart = ({ cart, emptyCart }) => {
    return (
        <>
            <h1>
                Sepetiniz <button className={styles.btn} onClick={emptyCart}>sepeti boşalt</button>
            </h1>
            <div className={styles.products}>
                {cart.map(({ name, price }, index) => (
                    <Product key={index} name={name} price={price} />
                ))}
            </div>
        </>
    );
};

//reactmemo proplar değişmezse render etmeemyi sağlıyor

const Product = React.memo(({ name, price, addToCart }) => {
    return (
        <div className={styles.product}>
            <h2>{name}</h2>
            <h3>{price.toLocaleString()} ₺</h3>
            {addToCart && (
                <button onClick={() => addToCart({ name, price })}>Sepete Ekle</button>
            )}
        </div>
    );

});
export default CallbackandMemo;