import { Response } from 'express';
import { Body } from '../interfaces/body';
import { User } from '../database/user/model';
import { User as TypeUser } from '../interfaces/user';
import { hashInThePassword } from '../utils/hash/hash';
import { validationCreateUser } from '../utils/verify/validationCreateUser';

export const create = async ({ body }: Body, response: Response) => {
  const { name, email, password }: TypeUser = body;

  const validationFieldsCreationUser = await validationCreateUser({
    name,
    email,
    password,
  });

  if (validationFieldsCreationUser === true) {
    if (await User.findOne({ email })) {
      return response.status(400).json('E-mail já está cadastrado!').end();
    };

    const hash = hashInThePassword(password);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    return response.status(201).json(user).end();
  };

  return response.status(400).json(validationFieldsCreationUser);
};