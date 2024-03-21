import mongoose from "mongoose";
const snippetSchema = new mongoose.Schema({
  username: String,
  language: String,
  stdin: String,
  code: String,
  timestamp: { type: Date, default: Date.now },
});

const Snippet = mongoose.model("Snippet", snippetSchema);

export default Snippet;
