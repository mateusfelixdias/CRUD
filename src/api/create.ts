import { Response } from 'express';
import { User } from '../database/user/model';

interface User {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

export const create = async ({ body }: User, response: Response) => {
  const { name, email, password } = body;

  const user = await User.create({
    name,
    email,
    password,
  });

  return response.status(201).json(user).end();
};