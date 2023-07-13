import { GoalResponseModel } from "../interfaces/models/goals";
import { GoalRepository } from "../interfaces/repositories/goal-repository";
import { GetGoalUseCase } from "../interfaces/use-cases/get-goal-usecase";

export class GetGoalUseCaseImpl implements GetGoalUseCase {
  goalRepository: GoalRepository;

  constructor(goalRepository: GoalRepository) {
    this.goalRepository = goalRepository;
  }

  async execute(id: String): Promise<GoalResponseModel> {
    return await this.goalRepository.getGoal(id);
  }
}
