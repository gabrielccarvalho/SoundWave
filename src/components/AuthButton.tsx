import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";

import { colors } from '@/utils/baseStyles';
import Button from './Button';
import { Text } from './Heading';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  @media (max-width: 414px) {

    p {
      display: none;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;

  @media (max-width: 414px) {
    img {
      width: 16px;
      height: 16px;
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
`

const Wrapper = styled.div`
  display: flex;
`

const AuthBtn = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <div>
        <Button name='Login' onClick={() => signIn()} type='login' color={colors.primary.text} bgColor='transparent' />
      </div>
    );
  }

  return (
    <>
      <Wrapper>
        {session && session.user && session.user.image && session.user.name && 
        (<Container>
          <Row>
            <Image src={session.user.image} alt={session.user.name} width={30} height={30} style={{ borderRadius: '50%' }} />
            <Text name={session.user.name} color={colors.primary.text} fontSize='16px' />
            <ButtonWrapper>
              <Button
                name='logout'
                icon='/icons/logout.svg'
                onClick={() => signOut()}
                type='login'
                color={colors.primary.highlight.red}
                bgColor='transparent'
                style={{
                  borderRadius: "0.5rem",
                  padding: '2px',
                }}
              />
            </ButtonWrapper>
          </Row>
        </Container>)}
      </Wrapper>
    </>
  );
};

export default AuthBtn;