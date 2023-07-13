import { GoalResponseModel } from "../models/goals";

export interface GetGoalsUseCase {
  execute(): Promise<GoalResponseModel[]>;
}
