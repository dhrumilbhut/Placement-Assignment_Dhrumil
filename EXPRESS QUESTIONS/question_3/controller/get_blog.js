const UserModel = require("../model/blog.model");

const GetBlog = async (req, res, next) => {
  try {
    const data = await UserModel.find({});
    if (data) {
      return res.status(201).send({
        message: "Data retrieved successfully",
        success: true,
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).send({
      message: error.message || "Unabel to get data from Database",
      success: false,
      data: null,
    });
  }
};

module.exports = GetBlog;
