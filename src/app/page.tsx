import { Flex, Text, Spacer, Box } from "@chakra-ui/react";
import ProfileInput from "./components/ProfileInput";
import Preview from "./components/Preview";

export default function Home() {
  return (
    <main className="bg-basebg">
      <Flex minWidth="max-content">
        <Box>
          <ProfileInput />
          <ProfileInput />
        </Box>
        <Preview />
      </Flex>
    </main>
  );
}
