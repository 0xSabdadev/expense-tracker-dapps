import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  color: { type: String, default: '#000000' },
}, { timestamps: true });

export const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);