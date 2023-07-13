import { GoalInputModel, GoalResponseModel } from "../models/goals";

export interface CreateGoalUseCase {
  execute(goal: GoalInputModel): Promise<GoalResponseModel>;
}
