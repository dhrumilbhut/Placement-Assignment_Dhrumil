const UserModel = require("../model/blog.model");
const DeleteBlog = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(401).send({
      message: "Insufficient Data",
      success: false,
    });
  }
  try {
    const data = await UserModel.findByIdAndDelete(id);
    if (data) {
      return res.status(201).send({
        message: "Successfully Deleted",
        success: true,
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).send({
      message: error.message || "Unable to Delete Blog",
      success: false,
      data: null,
    });
  }
};

module.exports = DeleteBlog;
