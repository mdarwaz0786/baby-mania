import Contact from "../models/contact.model.js";

// Controller for creating a contact enquiry
export const createContact = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;
    const contact = new Contact({ name, email, mobile, message });
    await contact.save();
    return res.status(200).json({
      success: true,
      message: "Contact created successfully",
      contact,
    });
  } catch (error) {
    console.log("Error while creating contact:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while creating contact" });
  }
};

// Controller for fetching all contact enquiry
export const fetchAllContact = async (req, res) => {
  try {
    let filter = {};

    // Handle search query
    if (req.query.search) {
      filter.name = { $regex: new RegExp(req.query.search, "i") };
    }

    // Handle pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get total count of users for pagination
    const totalCount = await Contact.countDocuments(filter);

    const contact = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contacts not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Contacts fetched successfully",
      contact,
      totalCount,
    });
  } catch (error) {
    console.log("Error while fetching all contact:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching all contact" });
  }
};

// Controller for fetching a single contact enquiry by ID
export const fetchSingleContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Single contact fetched successfully",
      contact,
    });
  } catch (error) {
    console.log("Error while fetching single contact:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching single contact" });
  }
};

// Controller for updating a contact enquiry by ID
export const updateContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const { name, email, mobile, message } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { name, email, mobile, message },
      { new: true }
    );
    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      contact,
    });
  } catch (error) {
    console.log("Error while updating contact:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while updating contact" });
  }
};

// Controller for deleting a contact enquiry by ID
export const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const contact = await Contact.findByIdAndDelete(contactId);
    if (!contact) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
      contact,
    });
  } catch (error) {
    console.log("Error while deleting contact:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while deleting contact" });
  }
};
