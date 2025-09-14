import User from "../models/user.model.js";
import cloudinary from "../lib/cloudinary.js"; // If using Cloudinary

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Or get from req.body if not using auth middleware
    let profilePicUrl = req.body.profilePic;

    // If using Cloudinary and receiving a base64 string:
    if (profilePicUrl && profilePicUrl.startsWith("data:")) {
      const uploadRes = await cloudinary.uploader.upload(profilePicUrl, {
        folder: "avatars",
      });
      profilePicUrl = uploadRes.secure_url;
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { profilePic: profilePicUrl },
      { new: true }
    );

    res.json({ success: true, profilePic: user.profilePic });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile" });
  }
};