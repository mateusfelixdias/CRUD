import * as Yup from 'yup';
import { User } from '../../interfaces/user';

const validationFieldsCreationUser = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório!'),
  email: Yup.string().required('O campo E-mail é obrigatório!').email('E-mail inválido.'),
  password: Yup.string().required('O campo senha é obrigatório!').min(6, 'Essa senha está fraca!'),
});

export const validationCreateUser = async ({
  name,
  email,
  password,
}: User): Promise<true | Yup.ValidationError[]> => {
  try {
    await validationFieldsCreationUser.validate(
      { name, email, password },
      {
        abortEarly: false,
      }
    );

    return true;
  } catch (err: any) {
    return err.errors[0];
  };
};