import mongoose, { Schema, models, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    message: { type: String, trim: true },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Contact = models.Contact || model("Contact", contactSchema);
export default Contact;