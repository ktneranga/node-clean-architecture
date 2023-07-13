import { GoalInputModel, GoalResponseModel } from "../models/goals";

export interface updateGoalUseCase {
  execute(id: string, goal: GoalInputModel): Promise<GoalResponseModel>;
}
