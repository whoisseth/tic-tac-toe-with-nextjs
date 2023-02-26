/** @format */

import type { NextPage } from "next";
import Box from "../components/Box";
import Container from "../components/Container";
import { useSignal, useComputed } from "@preact/signals-react";

const Home: NextPage = () => {
  const chance = useSignal("O");

  return (
    <main className="flex min-h-screen  min-w-screen justify-center items-center ">
      <Container>
        <Box value={chance.value} />
        <Box value={chance.value} />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Container>
    </main>
  );
};

export default Home;
