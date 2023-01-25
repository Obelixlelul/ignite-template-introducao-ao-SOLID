import { Request, Response } from "express";

import { TurnUserAdminUseCase, IRequest } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    let user;

    try {
      user = this.turnUserAdminUseCase.execute({ user_id } as IRequest);
    } catch (error) {
      return response.status(404).json({ error });
    }

    return response.json(user);
  }
}

export { TurnUserAdminController };
