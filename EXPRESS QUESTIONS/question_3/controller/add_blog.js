const UserModel = require("../model/blog.model");

const AddBlog = async (req, res, next) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(401).send({
      message: "Insufficient data",
      success: false,
      data: null,
    });
  }
  try {
    const data = await UserModel.create({ title: title, body: body });
    return res.status(201).send({
      message: "Blog created Successfully",
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(401).send({
      message: e.message || "Unable to create blog",
      success: false,
      data: null,
    });
  }
};

module.exports = AddBlog;
