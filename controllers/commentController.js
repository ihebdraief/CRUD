const Comment = require('../models/commentModel');

exports.readAllComment = (req, res) => {
    res.json({message: 'Hello'});
}
exports.createAComment = (req, res) => {
   
    let newComment = new Comment(req.body);

    newComment.save((error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json(comment);
        }
    });
}
exports.readAComment = (req, res) => {
    Comment.findById(req.params.comment_id, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comment);
        }
    });
}
exports.updateAComment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, {new: true}, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comment);
        }
    });
}
exports.deleteAComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.comment_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Commentaire supprimé"});
        }
    });
}