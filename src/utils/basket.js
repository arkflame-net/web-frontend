import { calculateBasketPrice } from "../services/basketService";

export default class Basket {
    constructor () {
        const raw = localStorage.getItem("basket");
        this.basket = JSON.parse(raw || "{}");
    }

    public addItem (id, amount) {
        let item = this.basket[id] || 0;
        item += amount;
        this.basket[id] = item;
        this.saveItems();
    }

    public getItems () {
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

    public getItemCount () {
        let count = 0;

        let items = this.getItems();
        for (let item of items) {
            count += item.amount;
        }

        return count;
    }

    public async getTotalPrice () {
        return await calculateBasketPrice(this.getItems());
    }

    public removeItem (id, amount) {
        let item = this.basket[id] || 0;
        item -= amount;
        if (item <= 0) {
            delete this.basket[id];
        } else {
            this.basket[id] = item;
        }
        this.saveItems();
    }


    public saveItems () {
        const raw = JSON.stringify(this.basket);
        localStorage.setItem("basket", raw);
    }
}