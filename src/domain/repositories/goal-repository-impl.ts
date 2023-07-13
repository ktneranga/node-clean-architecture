import { GoalDataSource } from "../../data/interfaces/TaskDataSource";
import { GoalInputModel, GoalResponseModel } from "../interfaces/models/goals";
import { GoalRepository } from "../interfaces/repositories/goal-repository";

export class GoalRepositoryImpl implements GoalRepository {
  goalDataSource: GoalDataSource;

  constructor(goalDataSource: GoalDataSource) {
    this.goalDataSource = goalDataSource;
  }

  async createGoal(goal: GoalInputModel): Promise<GoalResponseModel> {
    return await this.goalDataSource.create(goal);
  }
}