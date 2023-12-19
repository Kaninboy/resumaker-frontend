import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { University } from "../interfaces/University";

type EducationDragProps = {
    university: University;
  };


export default function EducationDrag({ university }: EducationDragProps) {
    return (
    <Flex
        px="8px"
        py="12px"
        alignItems="center"
        bgColor="#F6F9FF"
        key={university.name}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M11.075 18C11.075 19.1 10.1689 20 9.06136 20C7.95386 20 7.04773 19.1 7.04773 18C7.04773 16.9 7.95386 16 9.06136 16C10.1689 16 11.075 16.9 11.075 18ZM9.06136 10C7.95386 10 7.04773 10.9 7.04773 12C7.04773 13.1 7.95386 14 9.06136 14C10.1689 14 11.075 13.1 11.075 12C11.075 10.9 10.1689 10 9.06136 10ZM9.06136 4C7.95386 4 7.04773 4.9 7.04773 6C7.04773 7.1 7.95386 8 9.06136 8C10.1689 8 11.075 7.1 11.075 6C11.075 4.9 10.1689 4 9.06136 4ZM15.1022 8C16.2097 8 17.1159 7.1 17.1159 6C17.1159 4.9 16.2097 4 15.1022 4C13.9947 4 13.0886 4.9 13.0886 6C13.0886 7.1 13.9947 8 15.1022 8ZM15.1022 10C13.9947 10 13.0886 10.9 13.0886 12C13.0886 13.1 13.9947 14 15.1022 14C16.2097 14 17.1159 13.1 17.1159 12C17.1159 10.9 16.2097 10 15.1022 10ZM15.1022 16C13.9947 16 13.0886 16.9 13.0886 18C13.0886 19.1 13.9947 20 15.1022 20C16.2097 20 17.1159 19.1 17.1159 18C17.1159 16.9 16.2097 16 15.1022 16Z"
            fill="#45484B"
          />
        </svg>
        <Box pl="6px">
          <Text fontSize="14px" fontWeight="600">
            {university.name}
          </Text>
          <Text fontSize="14px">{university.fieldOfStudy}</Text>
        </Box>
        <Spacer />
        <Flex gap="7px">
          <Button size="xs" w="64px" variant="outline" colorScheme="primary">
            Edit
          </Button>
          <Button size="xs" w="64px" variant="outline" colorScheme="red">
            Delete
          </Button>
        </Flex>
      </Flex>
    );
    }