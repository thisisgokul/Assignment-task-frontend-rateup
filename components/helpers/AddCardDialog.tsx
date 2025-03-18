"use client";
import {
  AlertDialog,AlertDialogAction,AlertDialogCancel,
  AlertDialogContent,AlertDialogDescription,AlertDialogFooter,
  AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,Input} from "./imports";

import { SetStateAction, useState } from "react";
import { mutate } from "swr";
import { Textarea } from "../ui/textarea";
import { createCard, updateCard } from "@/lib/Actions/cardActions";
import { AddCardDialogProps } from "@/types";

export function AddCardDialog({id,listId,cardTitle = "",cardDescription = "",}: AddCardDialogProps) {

  const [title, setTitle] = useState(cardTitle || "");
  const [description, setDescription] = useState(cardDescription || "");

  const handleSubmit = (): void => {
    if (id) {
      // Update existing card
      updateCard(id, { title, description }, () => {
        mutate(`/lists/${listId}/cards`); 
      });
    } else if (listId && !id) {
      // Create new card
      createCard({ listId, title, description }, () => {
        setTitle("");
        setDescription("");
        mutate(`/lists/${listId}/cards`); 
      });
    }
  };
  
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <span className="cursor-pointer">
          {!id ? "+ Add New Card" : "Edit Card"}
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {!id ? "Add a New Card" : "Edit Card"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {!id
              ? "Enter a title and description for your new card."
              : "Update the title and description of your card."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-2 space-y-3">
          <Input
            type="text"
            placeholder="Card Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Card Description"
            value={description}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setDescription(e.target.value)
            }
          />
        </div>
        <AlertDialogFooter >
          <AlertDialogCancel className="cursor-pointer" >Cancel</AlertDialogCancel>
          <AlertDialogAction className="cursor-pointer" onClick={handleSubmit} disabled={!title.trim()}>
            {!id ? "Create Card" : "Update Card"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
