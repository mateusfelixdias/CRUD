import { Request, Response } from 'express';
import { User } from '../database/user/model';

export async function read(request: Request, response: Response) {
  const users = await User.find({});

  if (!users.length) return response.status(404).json('Você não cadastrou nenhum usuário.').end();

  return response.status(200).json(users).end();
};