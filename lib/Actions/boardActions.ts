import axiosInstance from "@/lib/utils/axiosInstance";
import { toast } from "sonner";
import { mutate } from "swr";

export const createBoard = async (title: string, onSuccess: () => void) => {
  if (!title.trim()) return;

  const createBoardPromise = axiosInstance.post("/boards", { title });

  toast.promise(createBoardPromise, {
    loading: "Creating board...",
    success: () => {
      mutate("/boards"); // Revalidate SWR cache
      if (onSuccess) onSuccess(); // Callback function to reset the input
      return "Board created successfully!";
    },
    error: "Failed to create board",
  });

  try {
    await createBoardPromise;
  } catch (error) {
    console.error("Error creating board:", error);
  }
};
