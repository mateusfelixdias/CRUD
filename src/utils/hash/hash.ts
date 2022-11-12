import { hashSync } from 'bcryptjs';

export const hashInThePassword = (password: string) => {
  const hashInThePassword = hashSync(password, 8);

  return hashInThePassword;
};