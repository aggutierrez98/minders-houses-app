"use client";

import { LoginForm } from "@/components/login/LoginForm";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  return (
    <div className="container mx-auto p-4 h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <LoginForm />
      </Card>
    </div>
  );
}
