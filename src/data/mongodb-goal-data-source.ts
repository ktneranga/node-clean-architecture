import {
  GoalInputModel,
  GoalResponseModel,
} from "../domain/interfaces/models/goals";
import { GoalDataSource } from "./interfaces/TaskDataSource";
import { goals } from "./data-sources/mongo-db/schema/Task";

export class MongodbGoalDataSource implements GoalDataSource {
  async create(goal: GoalInputModel): Promise<GoalResponseModel> {
    const createdGoal = await goals.create({
      title: goal.title,
    });

    return {
      _id: createdGoal.id,
      title: createdGoal.title,
    };
  }
}
