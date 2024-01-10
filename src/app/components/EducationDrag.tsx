import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { University } from "../interfaces/University";
import { useRef, useState } from "react";
import { BaseURL } from "../page";

type EducationDragProps = {
  university: University;
  universities: University[];
  setUniversities: (universities: University[]) => void;
  editUniversity: (university: University) => void;
};

export default function EducationDrag({
  university,
  universities,
  setUniversities,
  editUniversity,
}: EducationDragProps) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  // add fetching data from api here
  const handleDelete = async () => {
    setDeleteLoading(true);
    const newUniversities = universities.filter(
      (u) => u.id !== university.id
    );
    setUniversities(newUniversities);
    try {
      const updateDeleteUniversity = await fetch(`${BaseURL}/education`, {
        method: "PUT",
        headers: {
          "X-UserID": "New1234",
        },
        body: JSON.stringify(newUniversities),
      });
    } catch (error) {
      setDeleteError(true);
    } finally {
      setDeleteLoading(false);
    }
  };
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputLevelRef = useRef<HTMLSelectElement>(null);
  const inputFieldOfStudyRef = useRef<HTMLInputElement>(null);
  const inputGPARef = useRef<HTMLInputElement>(null);
  // isError would be handle in the next update
  // const isError = inputGPARef.current === null || inputGPARef.current?.valueAsNumber < 0 || inputGPARef.current?.valueAsNumber > 4 || isNaN(inputGPARef.current?.valueAsNumber);

  return (
    <Flex
      px="8px"
      py="12px"
      alignItems="center"
      bgColor="#F6F9FF"
      key={university.id}
      borderRadius="md"
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
        <Button
          size="xs"
          w="64px"
          variant="outline"
          colorScheme="primary"
          onClick={onEditOpen}
        >
          Edit
        </Button>
        <Modal
          isOpen={isEditOpen}
          onClose={() => {
            onEditClose();
            // resetUniversity();
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Education Record</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl pb="12px">
                <FormLabel mb="6px" fontSize="14px">
                  Institution
                </FormLabel>
                <Input
                  size="sm"
                  placeholder="Chulalongkorn University"
                  ref={inputNameRef}
                  defaultValue={university.name}
                />
              </FormControl>
              <FormControl pb="12px">
                <FormLabel mb="6px" fontSize="14px">
                  Level
                </FormLabel>
                <Select
                  size="sm"
                  ref={inputLevelRef}
                  defaultValue={university.level}
                >
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </Select>
              </FormControl>
              <FormControl pb="12px">
                <FormLabel mb="6px" fontSize="14px">
                  Program / Field of Study
                </FormLabel>
                <Input
                  size="sm"
                  placeholder="e.g. Computer Engineering"
                  ref={inputFieldOfStudyRef}
                  defaultValue={university.fieldOfStudy}
                />
              </FormControl>
              <FormControl
                pb="12px"
                // isInvalid={isError}
              >
                <FormLabel mb="6px" fontSize="14px">
                  GPA
                </FormLabel>
                <Input
                  size="sm"
                  type="number"
                  placeholder="4.00"
                  ref={inputGPARef}
                  defaultValue={university.gpa}
                />
                {/* isError would be handle in the next update */}
                {/* {isError && (
                  <FormErrorMessage>
                    Please Enter a number between 0.00 - 4.00
                  </FormErrorMessage>
                )} */}
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="primary"
                onClick={() => {
                  editUniversity({
                    name: inputNameRef.current?.value ?? "",
                    level: inputLevelRef.current?.value ?? "",
                    fieldOfStudy: inputFieldOfStudyRef.current?.value ?? "",
                    gpa: inputGPARef.current?.valueAsNumber ?? 0,
                    id: university.id,
                  });
                  onEditClose();
                  // resetUniversity();
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button
          size="xs"
          w="64px"
          variant="outline"
          colorScheme="red"
          onClick={onDeleteOpen}
        >
          Delete
        </Button>
        <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete &quot;{university.name}&quot;</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Are you sure? you can&apos;t undo this action afterwards.
            </ModalBody>
            <ModalFooter>
              <Button mr="12px" onClick={onDeleteClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  handleDelete();
                  onDeleteClose();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
