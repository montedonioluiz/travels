import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

export default function SignOutMenu() {
  const router = useRouter();

  const signOut = () => {
    alert("volte sempre");
    router.push("/login");
  };

  return (
    <div className="absolute z-50 right-4 top-4">
      <button
        className="border-2 border-zinc-300 w-8 bg-zinc-300 rounded"
        onClick={signOut}
      >
        <FaSignOutAlt size={20} className="mx-auto" />
      </button>
    </div>
  );
}
