import News from '../models/newsModel.js';

export const postNews = async (req, res) => {
  try {
    const { title, content} = req.body;
    let { image } = req.body;
    if (!image) {
      image = "";
    }
    const news = new News({ title, content, image });
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    console.log("Error posting news", error.message);
    res.status(500).json({ error: error.message });
  }
}

export const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    console.log("Error getting news", error.message);
    res.status(500).json({ error: error.message });
  }
}

export const getNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    console.log("Error getting news", error.message);
    res.status(500).json({ error: error.message });
  }
}

export const editNews = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const news = await News.findById(req.params.id);
    if (title) {
      news.title = title;
    }
    if (content) {
      news.content = content;
    }
    if (image !== undefined) {
      news.image = image;
    }
    await news.save();
    res.status(200).json(news);
  } catch (error) {
    console.log("Error editing news", error.message);
    res.status(500).json({ error: error.message });
  }
}

export const deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "News deleted" });
  } catch (error) {
    console.log("Error deleting news", error.message);
    res.status(500).json({ error: error.message });
  }
}

