"use client";
import React, { useState } from "react";
import LoginForm from "@/features/auth/LoginForm";
import CreateAccountForm from "@/features/auth/CreateAccountForm";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-black bg-opacity-70 px-16 py-16 mt-2 w-full sm:w-3/5 lg:w-2/5 lg:max-w-md rounded-md ">
      <h2 className="text-white text-4xl mb-8 font-semibold">
        {isLogin ? "Sign in" : "Create account"}
      </h2>
      {isLogin ? <LoginForm /> : <CreateAccountForm />}
      <div className="flex flex-col gap-1 items-center mt-12 ">
        <p className="text-sm text-neutral-500">
          {isLogin
            ? "First time using Watch Wave?"
            : "Already have an account?"}
        </p>
        <button
          className="hover:underline cursor-pointer"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Create account" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
