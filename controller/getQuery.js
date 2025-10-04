const query = require("../schema/query");

exports.getAllQuery = async (req, res) => {
  try {
    const getAllQuery = await query.find();

    if (getAllQuery.length <= 0) {
      return res.status(400).json({
        success: false,
        message: "No queries found yet",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your All Queries are:",
      getAllQuery: getAllQuery,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
