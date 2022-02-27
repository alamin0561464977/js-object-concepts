const Kibrea = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const heroBalam2 = {
    id: 103,
    money: 8000,
    name: 'Hero Balam2'
}

// ====== call =========
Kibrea.treatDey.call(heroBalam, 500, 100, 50)
Kibrea.treatDey.call(heroBalam, 300, 50, 30)

// ====== apply ========
Kibrea.treatDey.apply(heroBalam, [500, 100, 50]);
Kibrea.treatDey.apply(heroBalam, [1000, 200, 100]);

Kibrea.treatDey.apply(heroBalam2, [1500, 250, 150])


