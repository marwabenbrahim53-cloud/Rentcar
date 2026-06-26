"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("Format d'email invalide").required("L'email est requis"),
  message: yup.string().min(10, "Le message doit contenir au moins 10 caractères").required("Le message est requis"),
}).required();

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Message envoyé:", data);
    alert("Votre message a été envoyé avec succès !");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-black/50 p-8 border border-white/10 rounded-2xl w-full max-w-md">
      <h2 className="text-2xl text-white font-bold mb-6">Contactez-nous</h2>
      
      <input {...register("name")} placeholder="Nom complet" className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded text-white" />
      <p className="text-red-400 text-xs mb-2">{errors.name?.message}</p>
      
      <input {...register("email")} placeholder="Email" className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded text-white" />
      <p className="text-red-400 text-xs mb-2">{errors.email?.message}</p>
      
      <textarea {...register("message")} placeholder="Votre message" className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded text-white h-32"></textarea>
      <p className="text-red-400 text-xs mb-4">{errors.message?.message}</p>
      
      <button className="w-full bg-blue-600 p-3 text-white font-bold rounded-lg hover:bg-blue-500 transition-all">
        Envoyer le message
      </button>
    </form>
  );
}