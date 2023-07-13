import {
  GoalInputModel,
  GoalResponseModel,
} from "../domain/interfaces/models/goals";
import { GoalDataSource } from "./interfaces/GoalDataSource";
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

  async getAll(): Promise<GoalResponseModel[]> {
    const fetchedGoals = await goals.find();

    return fetchedGoals.map((goal) => ({ _id: goal.id, title: goal.title }));
  }

  async getOne(id: string): Promise<GoalResponseModel> {
    const fetchedGoal = await goals.findById(id);

    return {
      _id: fetchedGoal?.id,
      title: fetchedGoal?.title,
    };
  }

  async update(id: String, goal: GoalInputModel): Promise<GoalResponseModel> {
    const updatedGoal = await goals.findByIdAndUpdate(id, goal);

    return {
      _id: updatedGoal?.id,
      title: updatedGoal?.title,
    };
  }
}
