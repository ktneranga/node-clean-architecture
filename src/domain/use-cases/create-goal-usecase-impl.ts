import { GoalInputModel, GoalResponseModel } from "../interfaces/models/goals";
import { GoalRepository } from "../interfaces/repositories/goal-repository";
import { CreateGoalUseCase } from "../interfaces/use-cases/create-goal-usecase";

export class CreateGoalUseCaseImpl implements CreateGoalUseCase {
  goalRepository: GoalRepository;

  constructor(goalRepository: GoalRepository) {
    this.goalRepository = goalRepository;
  }

  async execute(goal: GoalInputModel): Promise<GoalResponseModel> {
    return await this.goalRepository.createGoal(goal);
  }
}
