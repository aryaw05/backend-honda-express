const uploadFile = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) throw new Error("File tidak ditemukan");

    res.status(200).json({
      message: "Upload berhasil",
      filename: file.filename,
    });
  } catch (err) {
    next(err);
  }
};

export default { uploadFile };
