import { Box, Text, Spacer, Tag, Flex, Button, Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";
import { format } from "date-fns";

export function LaunchItem(launch) {
  return (
    <>
      <Box key={launch.id} bg="gray.100" p={4} m={4} borderRadius="lg">
        <Flex>
          <Text fontSize="2xl">
            Mission <strong>{launch.name}</strong> (
            {new Date(launch.date_utc).getFullYear()})
          </Text>
          <Spacer />
          <Tag colorScheme={launch.success ? "green" : "red"} p={2}>
            {launch.success ? "Success" : "Failure"}
          </Tag>
        </Flex>
        <Flex alignItems="center">
          <Icon as={HiCalendar} color="gray.500"></Icon>

          <Text color="gray.500" ml={1} fontSize="sm">
            {format(new Date(launch.date_utc), "MMMM d, yyyy")}
          </Text>
        </Flex>
        <Button mt={4} colorScheme="facebook">
          More Details
        </Button>
      </Box>
    </>
  );
}
