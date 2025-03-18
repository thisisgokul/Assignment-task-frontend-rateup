"use client";
//imports
import {
  AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,
  AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,Input,
} from "./imports";
import { useState } from "react";
import { createList, updateListTitle } from "@/lib/Actions/listActions";
import { boardIdProps } from "@/types";
import { mutate } from "swr";

export function AddListDialog({ boardId, id, listTitle }: boardIdProps) {
  const [title, setTitle] = useState(listTitle || "");

  const handleSubmit = (): void => {
    if (id) {
      updateListTitle(id, title, () =>  mutate(`/boards/${boardId}/lists`));
    } else {
      if(!boardId) return
      createList({ boardId, title, position: boardId }, () => setTitle("")); 
    
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <span className="cursor-pointer">
          {!listTitle ? " + Add New List" : "rename"}
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {!listTitle ? "Add a New List" : "Rename your List"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {!listTitle
              ? " Enter a title for your new list."
              : "update title for your list."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-2">
          <Input
            type="text"
            defaultValue={listTitle}
            placeholder="Board Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <AlertDialogFooter >
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
          className="cursor-pointer"
            onClick={handleSubmit}
            disabled={!title.trim()} // Disable button if input is empty
          >
            {!listTitle ? "   Create list" : "  Update list"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
