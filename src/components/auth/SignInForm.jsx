"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      const { error: authError } = await authClient.signIn.email({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || "Invalid email or password");
        return;
      }

      router.push("/");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
      <Surface className="w-full max-w-md rounded-3xl border border-border bg-surface p-6">
        <h1 className="sr-only">Sign In to ReSell Hub</h1>
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="text-2xl font-bold text-foreground">
              Welcome Back
            </Fieldset.Legend>
            <Description className="text-muted">
              Sign in to your ReSell Hub account
            </Description>

            <Fieldset.Group className="mt-4 gap-4">
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="you@example.com" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="Your password" variant="secondary" />
                <FieldError />
              </TextField>
            </Fieldset.Group>

            {error && (
              <p className="mt-3 rounded-lg bg-danger-soft px-3 py-2 text-sm text-danger">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="mt-6 w-full bg-accent text-accent-foreground"
              isDisabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="my-4 flex items-center gap-3">
              <hr className="flex-1 border-border" />
              <span className="text-xs text-muted">OR</span>
              <hr className="flex-1 border-border" />
            </div>

            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onPress={handleGoogleSignIn}
            >
              <FcGoogle className="text-lg" />
              Continue with Google
            </Button>

            <p className="mt-6 text-center text-sm text-muted">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-accent hover:underline">
                Sign Up
              </Link>
            </p>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
}