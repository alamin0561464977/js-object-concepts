const Kibrea = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
};

