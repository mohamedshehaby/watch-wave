import Image from "next/image";
import logo from "../../../public/images/logo.png";
import heroImage from "../../../public/images/hero.jpg";
import AuthForm from "@/features/auth/AuthForm";

function AuthPage() {
  return (
    <div className="relative w-full min-h-screen ">
      <Image
        fill
        src={heroImage}
        alt="Hero Image"
        style={{
          objectFit: "cover",
        }}
      />
      <div className=" absolute w-full h-full bg-black lg:bg-opacity-50 inset-0" />

      <nav className=" relative px-12 py-5 ">
        <Image className="h-12 w-48" src={logo} alt="watch wave logo" />
      </nav>

      <div className="relative flex justify-center">
        <AuthForm />
      </div>
    </div>
  );
}

export default AuthPage;
