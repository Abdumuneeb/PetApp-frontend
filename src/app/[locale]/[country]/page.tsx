import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function page() {
  const cookiesStore = cookies();
  const authToken = cookiesStore.get("authToken");
  if (!authToken) return redirect("/en/us/sign-in");

  return (
    <>
      <h1>Home Page </h1>
    </>
  );
}
