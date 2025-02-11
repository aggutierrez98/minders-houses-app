import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "./useAuth";

import { useRouter } from "next/navigation";
interface LoginFormData {
  email: string;
  password: string;
}

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: LoginFormData) => {
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
    router.push("/");
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    isLoading,
    errors,
  };
};
