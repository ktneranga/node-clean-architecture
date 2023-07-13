import { Router, Request, Response } from "express";
import { CreateGoalUseCase } from "../../domain/interfaces/use-cases/create-goal-usecase";

export default function GoalsRouter(createGoalUseCase: CreateGoalUseCase) {
  const router = Router();

  router.post("/create", async (req: Request, res: Response) => {
    try {
      const goal = req.body;
      const result = await createGoalUseCase.execute(goal);
      res.status(201).json({
        status: true,
        data: {
          result,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error saving data" });
    }
  });
  return router;
}
