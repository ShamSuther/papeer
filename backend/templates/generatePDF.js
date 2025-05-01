const PDFDocument = require("pdfkit");

function sectionTitle(doc, text) {
    doc.fontSize(16).fillColor("#424141").text(text);
    doc.moveDown(0.15);
}

function generatePDF(data) {
    const doc = new PDFDocument({ size: "A4", margin: "1.27cm" });
    doc.font("Times-Roman");

    const {
        name,
        mobile_number,
        email,
        linkedin_url,
        location,
        summary,
        education,
        skills,
        experience,
        projects,
        certifications,
    } = data;


    doc.fontSize(22).text(name || "John Doe", { align: "center", lineGap: 1, });
    doc.fontSize(10).text(`${mobile_number} | ${email} | ${linkedin_url} | ${location}`, { align: "center" });
    doc.moveDown(2);

    if (summary) {
        sectionTitle(doc, "Professional Summary");
        doc.fontSize(12).fillColor("black").text(summary);
        doc.moveDown();
    }

    if (education && education.length > 0) {
        sectionTitle(doc, "Education");
        education.forEach((edu) => {
            doc.fontSize(14).fillColor("black").text(edu.degree, { continued: true });
            doc.fontSize(12).font("Times-Roman").fillColor("black").text(`${edu.start_year}-${edu.end_year}`, { align: "right" });

            doc.fontSize(12).font("Times-Italic").fillColor("#424141").text(edu.school, { continued: true });
            doc.fontSize(12).font("Times-Italic").fillColor("#424141").text(`CGPA: ${edu.grade}/4`, { align: "right" });

            if (edu.description) doc.font("Times-Roman").fillColor("#424141").fontSize(12).text(edu.description, { continued: false });

            doc.moveDown(0.35);
        });
        doc.moveDown();
    }

    if (skills && skills.length > 0) {
        sectionTitle(doc, "Skills");
        skills.forEach((skill) => {
            doc.fontSize(12).fillColor("black").font("Times-Roman").text(`• ${skill.skill_name} (${skill.proficiency})`);
        })
        doc.moveDown();
    }

    if (experience && experience.length > 0) {
        sectionTitle(doc, "Experience");
        experience.forEach((exp) => {
            doc.fontSize(10).text(`${exp.job_title} at ${exp.company} (${exp.start_date} - ${exp.end_date})`);
            if (exp.description) doc.text(exp.description);
            doc.moveDown(0.15);
        });
        doc.moveDown();
    }

    if (projects && projects.length > 0) {
        sectionTitle(doc, "Projects");
        projects.forEach((project) => {
            doc.fontSize(14).fillColor("black").text(`${project.project_name} `, { continued: true });
            doc.fontSize(14).text(`(view):`, { link: project.project_url });
            doc.fontSize(12).font("Times-Roman").fillColor("#424141").text(`${project.description}`, { continued: false, indent: 10, indentAllLines: true });
            doc.moveDown(0.25);
        })
        doc.moveDown();
    }

    if (certifications && certifications.length > 0) {
        sectionTitle(doc, "Certifications");
        certifications.forEach((cert) => {
            doc.fontSize(12).fillColor("black").font("Times-Roman").text(`• ${cert.title} (${cert.issuer})`, { link: cert.credential_url });
        })
        doc.moveDown();
    }

    // Repeat for skills, projects, certifications if needed

    return doc;
}

module.exports = generatePDF;
