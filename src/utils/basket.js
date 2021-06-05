import { calculateBasketPrice } from "../services/basketService";

export default class Basket {
    constructor () {
        const raw = localStorage.getItem("basket");
        this.basket = JSON.parse(raw || "{}");
    }

    addItem (id, amount) {
        let item = this.basket[id] || 0;
        item += amount;
        this.basket[id] = item;
        this.saveItems();
    }

    getItems () {
        let keys = Object.keys(this.basket);
        let items = []
        for (let key of keys) {
            items.push({
                id: key,
                amount: this.basket[key]
            })
        }
        return items;
    }

    getItemAmount(id) {
        return this.basket[id] ? this.basket[id] : 0
    }

    getItemCount () {
        let count = 0;

        let items = this.getItems();
        for (let item of items) {
            count += item.amount;
        }

        return count;
    }

    async getTotalPrice () {
        return await calculateBasketPrice(this.getItems());
    }

    removeItem (id, amount) {
        let item = this.basket[id] || 0;
        item -= amount;
        if (item <= 0) {
            delete this.basket[id];
        } else {
            this.basket[id] = item;
        }
        this.saveItems();
    }

    saveItems () {
        const raw = JSON.stringify(this.basket);
        localStorage.setItem("basket", raw);
    }
}