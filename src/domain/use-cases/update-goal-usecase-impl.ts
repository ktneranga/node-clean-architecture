import { GoalInputModel, GoalResponseModel } from "../interfaces/models/goals";
import { GoalRepository } from "../interfaces/repositories/goal-repository";
import { updateGoalUseCase } from "../interfaces/use-cases/update-goal-usecase";

export class UpdateGoalUseCaseImpl implements updateGoalUseCase {
  goalRepository: GoalRepository;

  constructor(goalRepository: GoalRepository) {
    this.goalRepository = goalRepository;
  }

  async execute(id: string, goal: GoalInputModel): Promise<GoalResponseModel> {
    return await this.goalRepository.update(id, goal);
  }
}
