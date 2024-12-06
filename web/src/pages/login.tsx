import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import UnauthLayout from "@/layouts/unauth";
import Card from "@/components/layout/card";
import Input from "@/components/form/input";
import { logins } from "@/data/user";

export default function Login() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLogged = false;

    if (isLogged) {
      router.push("/");
    }
  });

  interface FormInput {
    username: string;
    password: string;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    if (Object.keys(errors).length !== 0) {
      return;
    }

    setIsLoading(true);
    if (
      logins.find(
        ({ password, username }) =>
          username === data.username && password === data.password
      )
    ) {
      console.log(data);
      // set login to storage
      router.push("/");
      alert("Bem vindo(a).");
    } else {
      alert("Usuário não encontrado.");
    }
    setIsLoading(false);
  };

  return (
    <UnauthLayout>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center text-2xl">Login</div>

          <Input
            label="Usuário"
            className="mb-4"
            form={{
              label: "username",
              register,
              options: {
                required: true,
                minLength: 4,
              },
              errors,
            }}
          />
          <Input
            label="Senha"
            className="mb-4"
            type="password"
            form={{
              label: "password",
              register,
              options: {
                required: true,
                minLength: 6,
              },
              errors,
            }}
          />

          <div className="flex justify-center">
            <button className="border-2 border-zinc-300 rounded p-1 hover:bg-zinc-400">
              {isLoading ? "loading" : "Entrar"}
            </button>
          </div>
        </form>
      </Card>
    </UnauthLayout>
  );
}
