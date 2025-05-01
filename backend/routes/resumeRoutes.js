const express = require("express");
const router = express.Router();
const generatePDF = require("../templates/generatePDF");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    // console.log("Received data for PDF generation:", data);

    const pdfDoc = generatePDF(data);

    // Set appropriate headers for PDF response
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");

    // Stream the generated PDF to the response
    pdfDoc.pipe(res);
    pdfDoc.end();
  } catch (err) {
    // console.error("PDF generation error:", err);
    res.status(500).json({ error: "An error occurred while generating the PDF." });
  }
});


module.exports = router;