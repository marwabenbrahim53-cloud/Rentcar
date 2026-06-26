"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Le nom d'utilisateur est requis"),
  email: yup.string().email("Format d'email invalide").required("L'email est requis"),
  password: yup.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").required("Le mot de passe est requis"),
}).required();

export default function InscriptionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log("Données d'inscription:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-black/50 p-8 border border-white/10 rounded-2xl w-full max-w-sm">
      <h2 className="text-2xl text-white font-bold mb-6">Inscription</h2>
      
      <input {...register("username")} placeholder="Nom d'utilisateur" className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded text-white" />
      <p className="text-red-400 text-xs mb-2">{errors.username?.message}</p>
      
      <input {...register("email")} placeholder="Email" className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded text-white" />
      <p className="text-red-400 text-xs mb-2">{errors.email?.message}</p>
      
      <input {...register("password")} type="password" placeholder="Mot de passe" className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded text-white" />
      <p className="text-red-400 text-xs mb-4">{errors.password?.message}</p>
      
      <button className="w-full bg-blue-400 p-3 font-bold rounded-lg hover:bg-blue-300 transition-all">
        Créer un compte
      </button>
    </form>
  );
}