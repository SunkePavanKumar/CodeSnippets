import snippetSchema from "../validations/snippet.validate.js";
import Snippet from "../models/snippets.model.js";

export const snippet = async (req, res) => {
  try {
    // validation of the input using the zod
    const validatedData = snippetSchema.parse(req.body);
    const { username, language, stdin, code } = validatedData;

    // save the data to the database
    const newSnippet = new Snippet({
      username,
      language,
      stdin,
      code,
    });
    await newSnippet.save();
    res.status(201).json({
      success: true,
      message: "Form data submitted successfully",
    });
  } catch (error) {
    console.error(`Error while posting snippet data, Error : ${error}`);
    res.status(504).json({
      success: false,
      message: error,
    });
  }
};

export const getSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find().lean().exec();
    if (!snippets || snippets.length === 0) {
      return res.status("400").json({
        success: false,
        message: "No snippets are available",
      });
    }

    res.status(200).json({
      success: true,
      message: "successfully fetched all the details",
      data: snippets,
    });
  } catch (error) {
    console.log(`Error while getting the snippet details Error : ${error}`);
    res.status(404).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getSnippetsById = async (req, res) => {
  try {
    const email = req.params.id;
    const snippets = await Snippet.find({ username: email }).lean().exec();
    if (!snippets || snippets.length === 0) {
      return res.status("400").json({
        success: false,
        message: "No snippets are available",
      });
    }

    res.status(200).json({
      success: true,
      message: "successfully fetched all the details",
      data: snippets,
    });
  } catch (error) {
    console.log(`Error while getting the snippet details Error : ${error}`);
    res.status(404).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
