import { Request, Response } from 'express';
import { User } from '../database/user/model';
import { isObjectIdOrHexString } from 'mongoose';

export async function update({ params: { id }, body }: Request, response: Response) {
  if (!isObjectIdOrHexString(id)) {
    return response.status(400).json('Dados passados icorretamente, tente novamente.').end();
  };

  const user = await User.findOne({ _id: id });

  if (!user) {
    return response.status(404).json('Usuário não encontrado!').end();
  };

  const { modifiedCount } = await User.updateOne({ _id: id }, { ...body });


  if (!modifiedCount) return response.status(400).json('Não foi possivel Atualizar o usuário!');

  return response.status(200).json('Usuário atualizado com sucesso!').end();
};