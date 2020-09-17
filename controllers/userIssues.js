const Issues = require("../models/userIssues");

exports.getIssuesById = (req,res,next,id) => {
    Issues.findById(id).exec((err,issue) => {
        if(err){
            return res.status(400).json({
                error: "Issue not found in DB"
            });
        }
        req.issue= issue;
        next();
    });
};

exports.createIssues = (req,res) => {
    const newIssue = new Issues(req.body);
    newIssue.save((err,issue) => {
        if(err){
            return res.status(400).json({
                error: "Not able to save issue in DB"
            });
        }
        res.json({issue});
    });
};

exports.getIssues = (req,res) => {
    return res.json(req.issue);
};

exports.getAllIssues = (req,res) => {
    Issues.find().exec((err,issuess) => {
        if(err){
            return res.status(400).json({
                error: "No issues found"
            });
        }
        res.json(issuess);
    });
};

exports.updateIssues = (req,res) => {
    const newIssue= req.issue;
    newIssue.title = req.body.title;
    newIssue.desc = req.body.desc;

    newIssue.save((err,updatedIssue) => {
        if(err){
            return res.status(400).json({
                error: "Failed to update issue"
            });
        }
        res.json(updatedIssue);
    });
};

exports.removeIssues = (req,res) => {
    const deleteIssue = req.issue;
    deleteIssue.remove((err,issue) => {
        if(err){
            return res.status(400).json({
                error: "Failed to delete this issue"
            });
        }
        res.json({
            message: " Issue Deleted successfully"
        });
    });

};