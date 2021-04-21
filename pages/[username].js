import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFetch } from "@refetty/react";
import axios from "axios";
import { addDays, subDays, format } from "date-fns";
import { useFormik } from "formik";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Button,
  Box,
  IconButton,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useAuth, Logo, formatDate, TimeBlock } from "../components";

const getSchedule = async ({ when, username }) =>
  axios({
    method: "get",
    url: "/api/schedule",
    params: {
      date: format(when, "yyyy-MM-dd"),
      username,
    },
  });

const Header = ({ children }) => (
  <Box p={4} display="flex" alignItems="center" justifyContent="space-between">
    {children}
  </Box>
);

export default function Schedule() {
  const router = useRouter();
  const [auth, { logout }] = useAuth();
  const [when, setWhen] = useState(() => new Date());
  const [data, { loading, status, error }, fetch] = useFetch(getSchedule, {
    lazy: true,
  });

  const addDay = () => setWhen((prevState) => addDays(prevState, 1));
  const removeDay = () => setWhen((prevState) => subDays(prevState, 1));

  useEffect(() => {
    fetch({ when, username: router.query.username });
  }, [when, router.query.username]);

  return (
    <Container>
      <Header>
        <Logo size={150} />
        <Button onClick={logout}>Sair</Button>
      </Header>
      <Box mt={8} display="flex" alignItems="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          bg="transparent"
          onClick={removeDay}
        />
        <Box flex={1} textAlign="center">
          {formatDate(when, "PPPP")}
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          bg="transparent"
          onClick={addDay}
        />
      </Box>

      <SimpleGrid p={4} columns={2} spacing={4}>
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}

        {data?.map(({ time, isBlocked }) => (
          <TimeBlock key={time} time={time} date={when} disabled={isBlocked} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
