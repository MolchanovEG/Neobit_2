const News = require("../models/News");

exports.getAllNews = async (req, res) => {
  try {
    const { page = 1, limit = 12 } = req.query;
    const offset = (page - 1) * limit;
    const news = await News.findAndCountAll({
      limit,
      offset,
      order: [["published_at", "DESC"]],
    });
    res.json({
      totalResults: news.count,
      currentPage: page,
      news: news.rows,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
