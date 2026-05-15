
# Eywa.ai Blueprint

## Overview

Eywa.ai is a digital "Wise Family Elder," a cross-platform application designed to provide a secure, AI-powered interface to a family’s decentralized data stored in Google Drive. It addresses the critical problem of "information blackouts" during family crises by making vital information accessible through a natural language interface, while upholding the strictest privacy and security standards.

## Core Features & Architecture

*   **Tech Stack:**
    *   **Frontend:** React with Material-UI (MUI), built with Vite. The UI will be responsive and designed with a mobile-first approach to simulate a native app experience.
    *   **Backend:** Node.js with Express for the primary API (user management, permissions). A separate Python service will handle the RAG pipeline, Google Drive integration, and interaction with the Vector DB.
    *   **Vector Database:** Pinecone, a managed vector database, for efficient indexing and retrieval of document embeddings from Google Drive.
    *   **Authentication:** Firebase Authentication using Google's OAuth provider to ensure that only authorized family members can access the system.
    *   **Deployment:** The React frontend will be deployed on Firebase Hosting.

*   **Folder Mapping Logic:** The system will map to a 5-Level Vault Structure within Google Drive:
    1.  **Legal:** Wills, trusts, power of attorney, property deeds.
    2.  **Financial:** Bank accounts, investments, insurance policies, tax documents.
    3.  **Medical:** Health records, medical directives, insurance details.
    4.  **History:** Family photos, journals, important life stories.
    5.  **End_of_Life:** Funeral plans, final wishes, memorial instructions.

*   **Security & Privacy (Guardrails):**
    *   **Zero-Knowledge Principle:** The AI will only answer questions based on the content of the indexed documents. It will not "hallucinate" or infer information.
    *   **Encryption:** All data is encrypted in transit (using TLS) and at rest.
    *   **Permission Checks:** Google Drive permissions are verified before every session.
    *   **Data Redaction:** Sensitive information like passwords found in documents will be automatically redacted.

## "Wise Elder" System Prompt

```
You are Eywa, the wise and empathetic elder of our family. Your sole purpose is to help family members find the information they need from our shared digital vault. You are a guardian of our collective memory and a guide in times of need.

**Your Core Principles:**

1.  **Empathy First:** Always respond with kindness, patience, and understanding. Acknowledge the user's emotional state, especially if the query is sensitive. Start responses with phrases like, "Of course, I can help with that," or "I understand this is important."
2.  **Absolute Fidelity to the Source:** You MUST ONLY use the information contained within the documents provided to you from our family's Google Drive. Never, under any circumstances, invent, assume, or infer information that is not explicitly stated in the documents.
3.  **Acknowledge Your Limits:** If you cannot find an answer or a requested document, state it clearly and calmly. Say, "I couldn't find that information in our family vault." Do not apologize or make excuses.
4.  **Privacy is Sacred:** Never reveal passwords, full account numbers, or other highly sensitive data. If asked for such information, respond with: "For our family's security, I cannot display that information directly. I can tell you which document contains it, if you'd like to open it yourself."
5.  **Guide, Don't Decide:** Your role is to retrieve information, not to offer advice (legal, financial, or medical). You can summarize documents, but you cannot interpret them or suggest courses of action.
```

## Development Plan

1.  **[COMPLETED]** **Project Scaffolding & Blueprint:** Initialize the React project and create this `blueprint.md` file.
2.  **[CURRENT]** **Build the Prototype UI:**
    *   Install necessary dependencies (`@mui/material`, `react-router-dom`).
    *   Create the main `Dashboard.tsx` component.
    *   Set up basic routing.
    *   Style the application to be vibrant, clean, and minimalistic.
3.  **Backend & Authentication Setup:**
    *   Configure Firebase Authentication.
    *   Develop the Node.js/Express backend for user and session management.
4.  **RAG Pipeline Development:**
    *   Implement the Python service for Google Drive integration.
    *   Set up the LlamaIndex/LangChain pipeline to process and embed documents.
    *   Integrate with the Pinecone vector database.
5.  **API Integration:**
    *   Connect the React frontend to the backend API to create a full end-to-end experience.
