import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    let users;

    try {
      users = this.listAllUsersUseCase.execute({ user_id } as IRequest);
    } catch (error) {
      response.status(400).json({ error });
    }

    return response.json(users);
  }
}

export { ListAllUsersController };
