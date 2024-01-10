"use client";
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { University } from "../interfaces/University";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import EducationDrag from "./EducationDrag";
import { use, useState } from "react";

type EducationBoxProps = {
  universities: University[];
  setUniversities: (universities: University[]) => void;
};

export default function EducationBox({
  universities,
  setUniversities,
}: EducationBoxProps) {
  const [dragLoading, setDragLoading] = useState(false);
  const [dragError, setDragError] = useState(false);
  const handleOnDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(universities);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDragLoading(true);
    setUniversities(items);
    try {
      const updateDragUniversity = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/education`, {
        method: "PUT",
        headers: {
          "X-UserID": "New1234",
        },
        body: JSON.stringify(items),
      });
    } catch (error) {
      setDragError(true);
    } finally {
      setDragLoading(false);
    }
  };
  // EditUniversity function: map university.id to edit the universities then setUniversities
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState(false);
  const editUniversity = async (university: University) => {
    const newUniversities = universities.map((u) => {
      if (u.id === university.id) {
        return university;
      } else {
        return u;
      }
    });
    setEditLoading(true);
    setUniversities(newUniversities);
    try {
      const updateEditUniversity = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/education`, {
        method: "PUT",
        headers: {
          "X-UserID": "New1234",
        },
        body: JSON.stringify(newUniversities),
      });
    } catch (error) {
      setEditError(true);
    } finally {
      setEditLoading(false);
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {universities.map((university, index) => {
              return (
                <Draggable
                  key={university.id}
                  draggableId={university.id}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-2"
                    >
                      <EducationDrag
                        key={university.id}
                        university={university}
                        universities={universities}
                        setUniversities={setUniversities}
                        editUniversity={editUniversity}
                      />
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
