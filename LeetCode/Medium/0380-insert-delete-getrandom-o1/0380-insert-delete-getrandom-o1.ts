class RandomizedSet {
    private _set: Set<number>;
    constructor() {
        this._set = new Set<number>();
    }

    insert(val: number): boolean {
        if (this._set.has(val)) {
            return false;
        }
        this._set.add(val);
        return true;
    }

    remove(val: number): boolean {
        if (this._set.has(val)) {
            this._set.delete(val);
            return true;
        }
        return false;
    }

    getRandom(): number {
        return Array.from(this._set)[Math.floor(Math.random() * this._set.size)]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */