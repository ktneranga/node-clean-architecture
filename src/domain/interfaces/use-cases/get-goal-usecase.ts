import { GoalResponseModel } from "../models/goals";

export interface GetGoalUseCase {
  execute(id: String): Promise<GoalResponseModel>;
}
