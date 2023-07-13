import {
  GoalInputModel,
  GoalResponseModel,
} from "../../domain/interfaces/models/goals";

export interface GoalDataSource {
  create(goal: GoalInputModel): Promise<GoalResponseModel>;
  getAll(): Promise<GoalResponseModel[]>;
  getOne(id: String): Promise<GoalResponseModel>;
  update(id: String, goal: GoalInputModel): Promise<GoalResponseModel>;
}
