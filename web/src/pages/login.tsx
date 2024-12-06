import { useEffect } from "react";
import { useRouter } from "next/navigation";

import UnauthLayout from "@/layouts/unauth";
import Card from "@/components/layout/card";
import Input from "@/components/form/input";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const isLogged = false;

    if (isLogged) {
      router.push("/");
    }
  });

  return (
    <UnauthLayout>
      <Card>
        <div className="text-center text-2xl">Login</div>
        <Input label="Usuário" className="mb-4" />
        <Input label="Senha" className="mb-4" />
        <div className="flex justify-center">
          <button className="border-2 border-zinc-300 rounded p-1">
            Entrar
          </button>
        </div>
      </Card>
    </UnauthLayout>
  );
}
