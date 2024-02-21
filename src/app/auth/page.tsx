import AuthForm from "@/features/auth/AuthForm";

function AuthPage() {
  return (
    <div className="relative w-full min-h-screen ">
      <div className=" absolute w-full h-full bg-black lg:bg-opacity-50 inset-0" />
      <div className="relative flex justify-center">
        <AuthForm />
      </div>
    </div>
  );
}

export default AuthPage;
