var database = [
    {username: "deptrai", password: "deptrai", info: "Day la thong tin deptrai"},
    {username: "demaban", password: "Sieude123", info: "Day la thong tin demaban"}
];

const queryDB = { //fai khai bao the nay thay vi module.exports, vi su dung func trong func.
    getUser: (name) => database.find(user => user.username === name),
    checkPass: (name, pass) => {
        let user = database.find(user => user.username === name);
        if(user.password === pass) {
            return true;
        }
        return false;
    },
    registerUser: (user) => {
        if(queryDB.getUser(user.username)) {
            throw "trung username";
        }
        database.push(user);
        console.log("DATABASE: ",database);
    }
}

module.exports = queryDB;