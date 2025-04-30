# Papeer., Intern Resume Builder

A responsive web application that empowers interns to create, preview, and export professional resumes with ease.

## Objective

Help interns build modern, polished resumes quickly by providing:

- An intuitive form interface
- Real-time live preview
- One-click PDF export functionality

## Tech Stack

- Frontend: React + Tailwind + ShadCN UI
- Backend: Node.js + Express
- PDF Engine: PDFKit |
- Validation: Zod

## Features

Customizable resume templates  
Real-time form-to-preview synchronization  
Export to PDF with one click  
Responsive layout (desktop, tablet, and mobile)  
Sectional data input:

- Personal Information
- Summary
- Education
- Experience
- Skills
- Projects
- Certifications

## Preview

On larger screens, the layout shows:

- **Left**: Form fields to enter data
- **Right**: Live resume preview

Responsive behavior ensures usability on **mobile and tablet devices**.

## API Endpoints

POST `/api/resume` Generate and return PDF from form data
