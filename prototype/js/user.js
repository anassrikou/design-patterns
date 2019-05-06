class User {
    constructor() {
        this._name = "";
        this._money = 0;
        this._items_to_buy = []; 
    }

    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }

    get money() {
        return this._money;
    }

    get items() {
        return this._items_to_buy.join(', ');
    }

    addItem(item) {
        this._items_to_buy.push(item);
    }

    giveMoney(amount) {
        this._money = amount;
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);
        
        cloned._name = this._name;
        cloned._items_to_buy = [...this._items_to_buy];
        
        return cloned;
    }
}

module.exports = User;