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
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { error: authError } = await authClient.signUp.email({
        ...user,
        plan: "free"
      });

      if (authError) {
        setError(authError.message || "Something went wrong during sign up");
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

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
      <Surface className="w-full max-w-md rounded-3xl border border-border bg-surface p-6">
        <h1 className="sr-only">Sign Up for ReSell Hub</h1>
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="text-2xl font-bold text-foreground">
              Create Account
            </Fieldset.Legend>
            <Description className="text-muted">
              Join ReSell Hub and start buying or selling today
            </Description>

            <Fieldset.Group className="mt-4 gap-4">
              <TextField isRequired name="name">
                <Label>Full Name</Label>
                <Input placeholder="Md. Rakib Hasan" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField name="image" type="url">
                <Label>Profile Image URL (optional)</Label>
                <Input placeholder="https://..." variant="secondary" />
                <FieldError />
              </TextField>

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

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="At least 8 characters" variant="secondary" />
                <Description>Must be at least 8 characters</Description>
                <FieldError />
              </TextField>

              <Select isRequired name="role" placeholder="Select one">
                <Label>Sign Up As</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="buyer" textValue="buyer">
                      Buyer
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="seller" textValue="seller">
                      Seller
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
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
              {loading ? "Creating account..." : "Sign Up"}
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
              onPress={handleGoogleSignUp}
            >
              <FcGoogle className="text-lg" />
              Continue with Google
            </Button>

            <p className="mt-6 text-center text-sm text-muted">
              Already have an account?{" "}
              <Link href="/signin" className="font-medium text-accent hover:underline">
                Sign In
              </Link>
            </p>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
}