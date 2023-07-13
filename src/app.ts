import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import connectDB from "./config/db";
import { GoalRepositoryImpl } from "./domain/repositories/goal-repository-impl";
import { CreateGoalUseCaseImpl } from "./domain/use-cases/create-goal-usecase-impl";
import GoalsRouter from "./application/routers/goal-router";
import { GetGoalsUseCaseImpl } from "./domain/use-cases/get-goals-usecase-impl";
import { GetGoalUseCaseImpl } from "./domain/use-cases/get-goal-usecase-impl";
import { UpdateGoalUseCaseImpl } from "./domain/use-cases/update-goal-usecase-impl";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  const dataSource = await connectDB();
  const goalsMiddleware = GoalsRouter(
    new CreateGoalUseCaseImpl(new GoalRepositoryImpl(dataSource)),
    new GetGoalsUseCaseImpl(new GoalRepositoryImpl(dataSource)),
    new GetGoalUseCaseImpl(new GoalRepositoryImpl(dataSource)),
    new UpdateGoalUseCaseImpl(new GoalRepositoryImpl(dataSource))
  );
  app.use("/goals", goalsMiddleware);
  app.listen(PORT, () => console.log(`server is running on port`, PORT));
})();
