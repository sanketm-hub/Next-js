import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

// The "||" part prevents "OverwriteModelError" during hot reload
export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);