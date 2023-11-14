import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login_Register.module.scss";
import { signup } from "../../apis/users";

export default function Register({ changeView }) {
  const [feedback, setFeedback] = useState("");
  const [feedbackGood, setFeedbackGood] = useState("");
  const navigate = useNavigate();
  const avatarRef = useRef();

  const yupSchema = yup.object({
    username: yup
      .string()
      .required("Le champ est obligatoire")
      .min(2, "Le champ doit comporter 2 caractères")
      .max(12, "Le champ ne doit pas contenir plus de 12 caractères"),
    email: yup
      .string()
      .email("Votre email n'est pas valide")
      .required("Le champ est obligatoire"),
    password: yup
      .string()
      .required("Le champ est obligatoire")
      .min(5, "Le champ doit comporter 5 caractères"),
    confirmPassword: yup
      .string()
      .required("Le champ est obligatoire")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
    cgu: yup.boolean().oneOf([true], "Vous devez accepter les CGU"),
  });

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    cgu: false,
    avatar: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  async function submit() {
    setFeedback("");
    const values = getValues();
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    if (avatarRef.current && avatarRef.current.files[0]) {
      formData.append("avatar", avatarRef.current.files[0]);
    }
    console.log(formData);
    try {
      const response = await signup(formData);
      if (response.message) {
        setFeedback(response.message);
      } else {
        setFeedbackGood(response.messageGood);
        reset(defaultValues);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`formulaire ${styles.formulaire}`}>
      <form onSubmit={handleSubmit(submit)}>
      
        <div className={`d-flex flex-column mb20 ${styles.inputContainer}`}>
  
          <input {...register("username")} type="text" id="username" placeholder="Nom d'utilisateur" />
          {errors?.username && (
            <p className="text-error">{errors.username.message}</p>
          )}
        </div>
        <div className={`d-flex flex-column mb20 ${styles.inputContainer}`}>
      
          <input {...register("email")} type="text" id="email" placeholder="Email" />
          {errors?.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className={`d-flex flex-column mb20 ${styles.inputContainer}`}>
     
          <input {...register("password")} type="password" id="password" placeholder="Mot de passe" />
          {errors?.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className={`d-flex flex-column mb20 ${styles.inputContainer}`}>
    
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            placeholder="Confirmer mot de passe"
          />
          {errors?.confirmPassword && (
            <p className="text-error">{errors.confirmPassword.message}</p>
          )}
        </div>
       
        <div className={`d-flex mb20 align-items-center ${styles.inputContainer}`}>
          <label htmlFor="cgu" className="mr10">
            J'accepte les conditions d'utilisation générales
          </label>
          <input {...register("cgu")} type="checkbox" id="cgu" className={styles.cguCheckbox} />
        </div>
        {errors?.cgu && <p className="text-error">{errors.cgu.message}</p>}
        <button className={`btn btn-primary ${styles.button}`}>Submit</button>
        {feedback && <p className={`${styles.feedback}`}>{feedback}</p>}
        {feedbackGood && (
          <p className={`${styles.feedbackGood}`}>{feedbackGood}</p>
        )}
      </form>
    </div>
  )
}

