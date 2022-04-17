import { LaunchItem } from "./components/LaunchItem";
import * as API from "./services/launches.js";
import { useState, useEffect } from "react";
import logo from "./assets/logo-spacex.png";

import { Flex, Heading, Image, Spinner, Center } from "@chakra-ui/react";

export const App = () => {
  const [launches, setLaunches] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  return (
    <>
      <Image m={4} src={logo} alt="spacex logo" width={300} />
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.length > 0 ? (
          launches.map((launch) => <LaunchItem {...launch} key={launch.id} />)
        ) : (
          <Center>
            <Spinner color="blue.700" size="xl" />
          </Center>
        )}
      </section>
    </>
  );
};
