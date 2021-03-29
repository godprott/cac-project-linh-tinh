const taskModel = require("../models/listTask");

module.exports = {
    index: (req, res) => {
        taskModel.getAllTask((err, result) => {
            if (err) throw err; // neu err, no lam sap server luon @@
            
            let msg = "";
            
            if(req.query.ok == "addDone")
              msg = "Add thanh cmn cong !!!";
            else if(req.query.ok == "deleteDone")
              msg = "Delete thanh cmn cong !!!";
            else if(req.query.ok == "changeDone")
              msg = "Update status thanh cmn cong !!!";
            else if(req.query.ok == "updateDone")
              msg = "Update name thanh cmn cong !!!";
            
              console.log(result);
            res.render("index",{ taskData: result, msg });
        });
    },

    add: (req, res) => {
        taskModel.addTask(req.body.task,(err) => {
            if (err) throw err;
            res.redirect("/?ok=addDone");
        });
    },

    delete: (req, res) => {
        taskModel.deleteTask(req.params.id, (err) => {
            if (err) throw err;
            res.redirect("/?ok=deleteDone");
        });
    },

    status: (req, res) => {
        taskModel.changeStateTask(req.params.id, req.query.checked, (err) => {
            if (err) throw err;
            res.redirect("/?ok=changeDone");
        });
    },

    update: (req, res) => {
        taskModel.updateTask(req.params.id, req.query.name, (err) => {
            if (err) throw err;
            res.redirect("/?ok=updateDone");
        });
    }
};