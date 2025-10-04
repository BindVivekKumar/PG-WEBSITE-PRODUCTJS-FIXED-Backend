const query = require("../schema/query");

exports.queryController = async (req, res) => {
  try {
    const { fullName, phone, email, requirement, address, message } = req.body;

    // Validation
    if (!fullName || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required. Please fill them and try again.",
      });
    }

    // Create new query (create() already saves it)
    const newQuery = await query.create({
      fullName,
      phone,
      email,
      requirement,
      address,
      message,
      createdAt: Date.now(),
    });

    // Return response with the saved object
    return res.status(201).json({
      success: true,
      message: "Your query has been submitted successfully.",
      data: newQuery,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message, // optional: remove in production
    });
  }
};
