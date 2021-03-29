const con = require("../database");

con.connect((err) => {
    if (err) throw err;
    console.log("Connected Database!");
  });

module.exports = {
    getAllTask: (callback) => { // hien tai fai dung callback func de su dung ket qua databse tra ve
        con.query("select * from listTask", callback);
    },

    addTask: (name, callback) => {
        const sqlSyntax = "INSERT INTO listTask (name, is_active) VALUES (?, false)";
        con.query(sqlSyntax, [name], callback);

    },

    changeStateTask: (id, state, callback) => {
        con.query("UPDATE listTask SET is_active =" + state + " where id =" + id, callback);
    },

    deleteTask: (id, callback) => {
        con.query("DELETE FROM listTask WHERE id = " + id, callback);
    },

    updateTask: (id, name, callback) => {
        con.query("update listTask set name ='" + name + "' WHERE id = " + id, callback);
    }
}