import { toast } from "sonner";
import axiosInstance from "../utils/axiosInstance";

type CardViewProps = {
    listId: string;
    title: string;
    description:string
   
}
//#1 Function to create a new card in a list
export const createCard = async (cardData: CardViewProps, onSuccess: () => void) => {
    if (!cardData.title.trim()) return; 
  
    const { listId, title, description} = cardData; 
  
    const createCardPromise = axiosInstance.post(`/lists/${listId}/cards`, {
      title,description,
          });
  
    toast.promise(createCardPromise, {
      loading: "Creating Card...",
      success: () => {
        onSuccess(); 
        return "Card created successfully!";
      },
      error: "Failed to create Card",
    });
  
    try {
      await createCardPromise;
    } catch (error) {
      console.error("Error creating Card:", error);
    }
  };
  

  //#2 Function to update title and description in the card
  export const updateCard = async (
    id: number,
    updatedData: { title?: string; description?: string },
    onSuccess: () => void
  ) => {
    if (!updatedData.title?.trim()) return;
  
    const updateCardPromise = axiosInstance.put(`/cards/${id}`, updatedData);
  
    toast.promise(updateCardPromise, {
      loading: "Updating Card...",
      success: () => {
        onSuccess(); 
        return "Card updated successfully!";
      },
      error: "Failed to update Card",
    });
  
    try {
      await updateCardPromise;
    } catch (error) {
      console.error("Error updating Card:", error);
    }
  };
  
  //#3 Function for move card to another list
  export const moveCard = async (
      list_id: number,
      id: number,
    onSuccess: () => void
  ) => {
    if (!id || !list_id) return;
  
    const updateCardPromise = axiosInstance.put(`/cards/${id}/move`, { list_id });
  
    toast.promise(updateCardPromise, {
      loading: "Moving Card...",
      success: () => {
        onSuccess(); 
        return "Card moved successfully!";
      },
      error: "Failed to move Card",
    });
  
    try {
      await updateCardPromise;
    } catch (error) {
      console.error("Error moving Card:", error);
    }
  };

//#4 Funtion for delete the card from a list
  export const deleteCard = async (id: number, onSuccess: () => void) => {
    if (!id) return;
  
    const deleteCardPromise = axiosInstance.delete(`/cards/${id}`);
  
    toast.promise(deleteCardPromise, {
      loading: "Deleting Card...",
      success: () => {
        onSuccess(); 
        return "Card deleted successfully!";
      },
      error: "Failed to delete Card",
    });
  
    try {
      await deleteCardPromise;
    } catch (error) {
      console.error("Error deleting Card:", error);
    }
  };
  