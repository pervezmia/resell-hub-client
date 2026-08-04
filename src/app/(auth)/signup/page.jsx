import SignUpForm from "@/components/auth/SignUpForm";

export const metadata = {
  title: "Sign Up | ReSell Hub",
  description: "Create your ReSell Hub account to start buying or selling pre-owned products.",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return <SignUpForm />;
}