import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";

type EducationInputProps = {
  addUniversity: (university: string) => void;
  universities: string[];
};

export default function EducationInput({
  addUniversity,
  universities,
}: EducationInputProps) {
  const [university, setUniversity] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const UniversityList = universities.map((university) => {
    return <li key={university}>{university}</li>;
  });

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="14px"
      w="100%"
      bgColor="white"
      mb="18px"
    >
      <Flex alignItems="center" pb="14px" gap="4px">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5144 3.12584C11.8164 2.95805 12.1836 2.95805 12.4856 3.12584L21.4856 8.12584C21.8031 8.30221 22 8.63683 22 9C22 9.36317 21.8031 9.69779 21.4856 9.87416L19.3853 11.041C20.0193 13.035 20.1672 15.1564 19.8105 17.2268C19.734 17.6708 19.37 18.0088 18.9216 18.0523C16.5974 18.2779 14.4061 19.2405 12.6676 20.7995C12.2877 21.1402 11.7123 21.1402 11.3324 20.7995C10.623 20.1634 9.83835 19.6265 9 19.1986V20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V18.4141C6.375 18.2374 5.7324 18.1158 5.0793 18.0523C4.63095 18.0088 4.26707 17.6708 4.19054 17.2269C3.83363 15.1566 3.98139 13.0353 4.6155 11.0415L2.51436 9.87416C2.19689 9.69779 2 9.36317 2 9C2 8.63683 2.19689 8.30221 2.51436 8.12584L11.5144 3.12584ZM6.40569 12.036C6.03279 13.3765 5.9154 14.7766 6.06108 16.1628C6.37687 16.2132 6.69004 16.2751 7 16.3484V12.5C7 12.4565 7.00283 12.4133 7.00836 12.3708L6.40569 12.036ZM9 13.4773V16.9965C10.0702 17.4423 11.0799 18.0314 12 18.7511C13.7282 17.3993 15.7723 16.5084 17.9398 16.1627C18.0854 14.7764 17.968 13.3763 17.5951 12.0357L12.4856 14.8742C12.4856 14.8742 12.4857 14.8742 12.4856 14.8742C12.1836 15.0419 11.8164 15.0419 11.5144 14.8742C11.5143 14.8742 11.5144 14.8742 11.5144 14.8742L9 13.4773ZM12 12.856L18.9409 9L12 5.14396L5.05913 9L6.30538 9.69236C6.31252 9.69611 6.31962 9.69994 6.32668 9.70386L8.65024 10.9949L11.5144 9.40382C11.9972 9.13563 12.606 9.3096 12.8742 9.79239C13.1424 10.2752 12.9684 10.884 12.4856 11.1522L10.7093 12.1389L12 12.856Z"
            fill="#4A8CF8"
          />
        </svg>
        <Text fontSize="18px" color="primary.700" as="b">
          Education
        </Text>
        <Spacer />
        <Button
          size="xs"
          w="75px"
          colorScheme="primary"
          onClick={onOpen}
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M6.5 1.125C3.81195 1.125 1.625 3.31195 1.625 6C1.625 8.68805 3.81195 10.875 6.5 10.875C9.18805 10.875 11.375 8.68805 11.375 6C11.375 3.31195 9.18805 1.125 6.5 1.125ZM8.375 6.375H6.875V7.875C6.875 7.97446 6.83549 8.06984 6.76517 8.14017C6.69484 8.21049 6.59946 8.25 6.5 8.25C6.40054 8.25 6.30516 8.21049 6.23484 8.14017C6.16451 8.06984 6.125 7.97446 6.125 7.875V6.375H4.625C4.52554 6.375 4.43016 6.33549 4.35984 6.26517C4.28951 6.19484 4.25 6.09946 4.25 6C4.25 5.90054 4.28951 5.80516 4.35984 5.73484C4.43016 5.66451 4.52554 5.625 4.625 5.625H6.125V4.125C6.125 4.02554 6.16451 3.93016 6.23484 3.85984C6.30516 3.78951 6.40054 3.75 6.5 3.75C6.59946 3.75 6.69484 3.78951 6.76517 3.85984C6.83549 3.93016 6.875 4.02554 6.875 4.125V5.625H8.375C8.47446 5.625 8.56984 5.66451 8.64017 5.73484C8.71049 5.80516 8.75 5.90054 8.75 6C8.75 6.09946 8.71049 6.19484 8.64017 6.26517C8.56984 6.33549 8.47446 6.375 8.375 6.375Z"
                fill="white"
              />
            </svg>
          }
        >
          Add
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Education Record</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl pb="12px">
                <FormLabel mb="6px" fontSize="14px">
                  Institution
                </FormLabel>
                <Input
                  size="sm"
                  onChange={(e) => setUniversity(e.target.value)}
                  value={university}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="primary"
                onClick={() => {
                  addUniversity(university);
                  onClose();
                  setUniversity("");
                  toast({
                    position: "bottom-right",
                    render: () => (
                      <Alert status="success" variant="left-accent">
                        <AlertIcon />
                        <Box>
                          <AlertTitle>
                            Added &quot;{university}&quot;
                          </AlertTitle>
                          <AlertDescription>
                            Education record added successfully
                          </AlertDescription>
                        </Box>
                      </Alert>
                    ),
                  });
                }}
              >
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      {/* Showing UniversityCard Component soon */}
      <ul>{UniversityList}</ul>
    </Box>
  );
}
