import axiosClient from "./axiosClient";

// Get all contacts
export const getAllContacts = async () => {
  try {
    const response = await axiosClient.get("/contact");
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

// Add a new contact
export const addContact = async (contactData) => {
  try {
    const response = await axiosClient.post("/contact", contactData);
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

// Delete all contacts
export const deleteAllContacts = async () => {
  try {
    const response = await axiosClient.delete("/contact");
    return response.data;
  } catch (error) {
    console.error("Error deleting contacts:", error);
    throw error;
  }
};
