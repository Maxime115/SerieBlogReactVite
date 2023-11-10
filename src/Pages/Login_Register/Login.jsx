import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signin } from '../../apis/users';
import styles from './Login_Register.module.scss';

const LoginForm = () => {
  const yupSchema = yup.object({
    username: yup.string().required('Le champ est obligatoire'),
    password: yup.string().required('Le champ est obligatoire'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yupSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await signin({
        email: data.username, 
        password: data.password,
      });
      // Gérer la réponse comme dans le deuxième formulaire (setFeedback, reset, etc.)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.formulaire} onSubmit={handleSubmit(onSubmit)}>
    
        <input type="text" placeholder="Nom d'utilisateur" {...register('username')} />
      
      {errors?.username && <p>{errors.username.message}</p>}
      <br />
      
        <input type="password" placeholder="Mot de passe" {...register('password')} />
     
      {errors?.password && <p>{errors.password.message}</p>}
      <br />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
