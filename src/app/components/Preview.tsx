import { Box, Flex, Text } from "@chakra-ui/react";
import { University } from "../interfaces/University";

type PreviewProps = {
  name: string;
  email: string;
  phone: string;
  universities: University[];
};

export default function Preview({
  name,
  email,
  phone,
  universities,
}: PreviewProps) {
  const previewUniversity = universities.map((university) => {
    return (
      <Box key={university.name}>
        <Text fontSize="12px" fontWeight="700">
          {university.name}
        </Text>
        <Text fontSize="12px">{university.fieldOfStudy}</Text>
        <Text fontSize="12px">GPA {university.gpa}</Text>
      </Box>
    );
  });

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding="18px"
      flex="1"
      w="100%"
      bgColor="white"
    >
      <Flex flexDirection="column" alignItems="center" pb="8px">
        <Text textAlign="center" fontSize="16px" fontWeight="700">
          {name}
        </Text>
        <Flex alignItems="center" gap="10px">
          <Flex gap="4px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.6 2.4C1.6 2.18783 1.68429 1.98434 1.83431 1.83431C1.98434 1.68428 2.18783 1.6 2.4 1.6H4.1224C4.31176 1.60009 4.49496 1.66734 4.6394 1.78981C4.78383 1.91227 4.88014 2.082 4.9112 2.2688L5.5032 5.8168C5.53149 5.98577 5.50478 6.15937 5.42701 6.31202C5.34924 6.46468 5.22452 6.58834 5.0712 6.6648L3.8328 7.2832C4.27689 8.38372 4.93827 9.38343 5.77742 10.2226C6.61657 11.0617 7.61628 11.7231 8.7168 12.1672L9.336 10.9288C9.41242 10.7756 9.53595 10.651 9.68844 10.5733C9.84094 10.4955 10.0143 10.4687 10.1832 10.4968L13.7312 11.0888C13.918 11.1199 14.0877 11.2162 14.2102 11.3606C14.3327 11.505 14.3999 11.6882 14.4 11.8776V13.6C14.4 13.8122 14.3157 14.0157 14.1657 14.1657C14.0157 14.3157 13.8122 14.4 13.6 14.4H12C6.256 14.4 1.6 9.744 1.6 4V2.4Z"
                fill="#45484B"
              />
            </svg>
            <Text fontSize="12px" fontWeight="700">
              {phone}
            </Text>
          </Flex>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="22"
            viewBox="0 0 2 22"
            fill="none"
          >
            <path d="M1 0V21.5" stroke="#45484B" />
          </svg>
          <Flex gap="4px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15 3H3C2.17275 3 1.5 3.67275 1.5 4.5V13.5C1.5 14.3273 2.17275 15 3 15H15C15.8273 15 16.5 14.3273 16.5 13.5V4.5C16.5 3.67275 15.8273 3 15 3ZM15 4.5V4.88325L9 9.5505L3 4.884V4.5H15ZM3 13.5V6.783L8.5395 11.0917C8.67083 11.1949 8.833 11.251 9 11.251C9.167 11.251 9.32917 11.1949 9.4605 11.0917L15 6.783L15.0015 13.5H3Z"
                fill="#45484B"
              />
            </svg>
            <Text fontSize="12px" fontWeight="700">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text fontSize="14px" fontWeight="700" textDecoration="underline">
        Education
      </Text>
      <ul>{previewUniversity}</ul>
    </Box>
  );
}
