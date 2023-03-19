import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { Navbar, Footer, Form } from '@/containers'
import { useRouter } from 'next/router';


const SigninPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter()

  React.useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [router, status])


  return (
    <>
      <Navbar />
      <Form />
      <Footer />
    </>
  );
}

export default SigninPage
