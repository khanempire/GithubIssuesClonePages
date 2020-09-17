const express = require("express");
const router = express.Router();

const {
    getIssuesById,
    createIssues,
    getIssues,
    getAllIssues,
    updateIssues,
    removeIssues
} = require("../controllers/userIssues");

router.param("issuesId",getIssuesById);

router.post(
    "/issues/create",
    createIssues
    );

router.get("/issues/:issuesId",getIssues);
router.get("/issues",getAllIssues);
//update
router.put(
    "/update/issues/:issuesId",
    updateIssues
);
//delete
router.delete(
    "/delete/issues/:issuesId",
    removeIssues
);

module.exports = router;