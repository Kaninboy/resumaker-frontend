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
import { use } from "react";

type EducationBoxProps = {
  universities: University[];
  setUniversities: (universities: University[]) => void;
};

export default function EducationBox({
  universities,
  setUniversities,
}: EducationBoxProps) {
  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(universities);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setUniversities(items);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {universities.map((university, index) => {
              return (
                <Draggable
                  key={university.name}
                  draggableId={university.name}
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
                        key={university.name}
                        university={university}
                        universities={universities}
                        setUniversities={setUniversities}
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
