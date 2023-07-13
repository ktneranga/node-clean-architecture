import { GoalInputModel, GoalResponseModel } from "../models/goals";

export interface GoalRepository {
  createGoal(goal: GoalInputModel): Promise<GoalResponseModel>;
  getGoals(): Promise<GoalResponseModel[]>;
  getGoal(id: String): Promise<GoalResponseModel>;
}
