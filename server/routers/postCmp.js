var postCmpController = require("../../DB/controles/companyPostControle");

module.exports = function (app) {
  app
    .route("/posts")
    .post(postCmpController.create_post)
    .get(postCmpController.display_all_posts);
  app
    .route("/posts/:postId")
    .put(postCmpController.update_post)
    .get(postCmpController.display_one_post)
    .delete(postCmpController.delete_post);
};
