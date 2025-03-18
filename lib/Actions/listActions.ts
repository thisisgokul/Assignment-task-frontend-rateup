import axiosInstance from "@/lib/utils/axiosInstance";
import { ListViewProps } from "@/types";
import { toast } from "sonner";
import { mutate } from "swr";

//#1 Function to create a new list in a board
export const createList = async (listData: ListViewProps, onSuccess: () => void) => {
  if (!listData.title.trim()) return; 

  const { boardId, title, position } = listData; 

  const createListPromise = axiosInstance.post(`/boards/${boardId}/lists`, {
    title,
    position,
  });

  toast.promise(createListPromise, {
    loading: "Creating list...",
    success: () => {
      mutate(`/boards/${boardId}/lists`); 
      onSuccess();
      return "List created successfully!";
    },
    error: "Failed to create list",
  });

  try {
    await createListPromise;
  } catch (error) {
    console.error("Error creating list:", error);
  }
};

//#2 Function to update list title
export const updateListTitle = async (id: number, title: string, onSuccess: () => void) => {
  if (!title.trim()) return; 

  const updateListPromise = axiosInstance.put(`/lists/${id}`, { title });

  toast.promise(updateListPromise, {
    loading: "Updating list title...",
    success: () => {
      onSuccess(); 
      return "List title updated successfully!";
    },
    error: "Failed to update list title",
  });

  try {
    await updateListPromise;
  } catch (error) {
    console.error("Error updating list title:", error);
  }
};
