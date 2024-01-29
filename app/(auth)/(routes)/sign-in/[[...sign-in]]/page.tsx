import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <SignIn redirectUrl="/Loading" afterSignInUrl="http://localhost:3000/Loading" signUpUrl="/sign-up" afterSignUpUrl="/sign-in" />
  )
}