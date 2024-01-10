"use client";
import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import ProfileInput from "./components/ProfileInput";
import Preview from "./components/Preview";
import { use, useEffect, useState } from "react";
import EducationInput from "./components/EducationInput";
import { University } from "./interfaces/University";

export const BaseURL =
  "https://krnyf6zr6j.execute-api.ap-southeast-1.amazonaws.com/api";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [universities, setUniversities] = useState<University[]>([]);

  const [getLoading, setGetLoading] = useState(false);
  const [getError, setGetError] = useState(false);

  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState(false);

  const addUniversity = async (university: University) => {
    // handle error if fetching fails
    // also handle loading state
    setPostLoading(true);
    setUniversities([...universities, university]);
    try {
      const postUniversity = await fetch(`${BaseURL}/education`, {
        method: "PUT",
        headers: {
          "X-UserID": "New1234",
        },
        body: JSON.stringify([...universities, university]),
      });
    } catch (error) {
      setPostError(true);
    } finally {
      setPostLoading(false);
    }
  };

  // handle loading state and error state
  useEffect(() => {
    const fetchUniversities = async () => {
      setGetLoading(true);
      try {
        const response = await fetch(`${BaseURL}/education`, {
          method: "GET",
          headers: {
            "X-UserID": "New1234",
          },
        });
        const universities = (await response.json()) as University[];
        setUniversities(universities);
      } catch (error) {
        setGetError(true);
      } finally {
        setGetLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  return (
    <main className="bg-basebg overflow-x-hidden">
      {getLoading && (
        <div className="fixed w-screen h-screen opacity-80 bg-slate-300 top-0 left-0 right-0 bottom-0 z-[100] flex justify-center items-center">
          <Spinner color="primary.500" size="xl" thickness="4px" />
        </div>
      )}
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
            setUniversities={setUniversities}
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
