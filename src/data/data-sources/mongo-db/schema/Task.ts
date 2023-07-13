import { Schema, model, connect } from "mongoose";

interface IGoal {
  title: String;
}

const goalSchema = new Schema<IGoal>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const goals = model<IGoal>("goals", goalSchema);
