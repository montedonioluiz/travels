import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const isLogged = false;

    if (isLogged) {
      router.push("/");
    }
  });

  return <div>hello login</div>;
}
