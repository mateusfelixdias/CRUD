import { Request, Response } from 'express';
import { User } from '../database/user/model';
import { isObjectIdOrHexString } from 'mongoose';

export async function destroy({ params: { id } }: Request, response: Response) {
  if (!isObjectIdOrHexString(id)) {
    return response.status(400).json('Dados passados icorretamente, tente novamente.').end();
  };

  const user = await User.findOne({ _id: id });

  if (!user) {
    return response.status(404).json('Usuário não encontrado!').end();
  };

  const deleted = await User.findByIdAndDelete({ _id: id });
  
  if (!deleted) return response.status(400).json('Não foi possivel deletar o usuário!');

  return response.status(204).end();
};