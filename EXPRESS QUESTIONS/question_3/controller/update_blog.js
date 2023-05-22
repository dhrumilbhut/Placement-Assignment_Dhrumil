const UserModel = require("../model/blog.model");

const UpdateBlog = async (req, res, next) => {
  const { title, body, id } = req.body;
  if (!id && !title && !body) {
    return res.status(401).send({
      message: "In Sufficient Data",
      success: false,
      data: null,
    });
  }
  try {
    const data = await UserModel.findByIdAndUpdate(id, {
      title: title,
      body: body,
    });
    if (data) {
      return res.status(201).send({
        message: "Successfully Updated Data",
        success: true,
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).send({
      message: error.message || "Unable to update data",
      success: false,
      data: null,
    });
  }
};

module.exports = UpdateBlog;
