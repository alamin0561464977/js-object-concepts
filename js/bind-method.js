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
Kibrea.treatDey(100);
const heroTreatDey = Kibrea.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(200);
const heroBalam3 = Kibrea.treatDey.bind(heroBalam2);
heroBalam3(2000);