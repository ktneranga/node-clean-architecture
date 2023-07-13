import { Router, Request, Response } from "express";
import { CreateGoalUseCase } from "../../domain/interfaces/use-cases/create-goal-usecase";
import { GetGoalsUseCase } from "../../domain/interfaces/use-cases/get-goals-usecase";
import { GetGoalUseCase } from "../../domain/interfaces/use-cases/get-goal-usecase";
import { updateGoalUseCase } from "../../domain/interfaces/use-cases/update-goal-usecase";

export default function GoalsRouter(
  createGoalUseCase: CreateGoalUseCase,
  getGoalsUseCase: GetGoalsUseCase,
  getGoalUseCase: GetGoalUseCase,
  updateGoalUseCase: updateGoalUseCase
) {
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

  router.get("/get-all", async (req: Request, res: Response) => {
    try {
      const result = await getGoalsUseCase.execute();
      res.status(200).json({
        status: true,
        data: {
          result,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error fetching data" });
    }
  });

  router.get("/get/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await getGoalUseCase.execute(id);
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error fetching data",
      });
    }
  });

  router.put("/update/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const result = await updateGoalUseCase.execute(id, payload);
      res.status(200).json({
        status: true,
        data: {
          result,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error updating data" });
    }
  });

  return router;
}
