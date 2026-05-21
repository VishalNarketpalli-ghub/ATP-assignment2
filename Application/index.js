const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/run", async (req, res) => {
    const { code, languageId } = req.body;

    const response = await axios.post(
        "https://ce.judge0.com/submissions?wait=true",
        {
            source_code: code,
            language_id: languageId
        }
    );

    res.json(response.data);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});