const express = require("express");
const AddBlog = require("../controller/add_blog");
const DeleteBlog = require("../controller/delete_blog");
const UpdateBlog = require("../controller/update_blog");
const GetBlog = require("../controller/get_blog");
const blog_route = express.Router();

blog_route.post("/create", AddBlog);
blog_route.delete("/:id", DeleteBlog);
blog_route.post("/update", UpdateBlog);
blog_route.get("/blog", GetBlog);
module.exports = blog_route;
