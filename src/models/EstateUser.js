import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  role: {
    type: String,
    default: "USER",
  },
});

const EstateUser = models.EstateUser || new model("EstateUser", userSchema);
export default EstateUser;
