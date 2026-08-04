import SignInForm from "@/components/auth/SignInForm";

export const metadata = {
  title: "Sign In | ReSell Hub",
  description: "Log in to your ReSell Hub account to buy or sell pre-owned products.",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return <SignInForm />;
}