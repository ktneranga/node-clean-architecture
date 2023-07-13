import { GoalInputModel, GoalResponseModel } from "../models/goals";

export interface GoalRepository {
  createGoal(goal: GoalInputModel): Promise<GoalResponseModel>;
}
