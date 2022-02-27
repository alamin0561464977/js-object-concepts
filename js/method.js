const student = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea',
    major: 'mathematics',
    isRich: false,
    subject: ['english', 'economics', 'math 101', 'calculus'],
    bastFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis = 0) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);