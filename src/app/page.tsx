"use client";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProfileInput from "./components/ProfileInput";
import Preview from "./components/Preview";
import { useState } from "react";
import EducationInput from "./components/EducationInput";

interface University {
  name: string;
  level: string;
  fieldOfStudy: string;
  gpa: number;
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [universities, setUniversities] = useState<University[]>([]);
  const addUniversity = (university: University) => {
    setUniversities([...universities, university]);
  };

  return (
    <main className="bg-basebg">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={18}>
        <Box>
          <ProfileInput
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
          <EducationInput
            addUniversity={addUniversity}
            universities={universities}
          />
        </Box>
        <Preview
          name={name}
          email={email}
          phone={phone}
          universities={universities}
        />
      </SimpleGrid>
    </main>
  );
}
