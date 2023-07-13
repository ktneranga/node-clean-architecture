import {
  GoalInputModel,
  GoalResponseModel,
} from "../../domain/interfaces/models/goals";

export interface GoalDataSource {
  create(goal: GoalInputModel): Promise<GoalResponseModel>;
}
