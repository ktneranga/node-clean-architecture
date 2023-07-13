import { GoalResponseModel } from "../interfaces/models/goals";
import { GoalRepository } from "../interfaces/repositories/goal-repository";
import { GetGoalsUseCase } from "../interfaces/use-cases/get-goals-usecase";

export class GetGoalsUseCaseImpl implements GetGoalsUseCase {
  goalRepository: GoalRepository;

  constructor(goalRepository: GoalRepository) {
    this.goalRepository = goalRepository;
  }
  async execute(): Promise<GoalResponseModel[]> {
    return await this.goalRepository.getGoals();
  }
}
