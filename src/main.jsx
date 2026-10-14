import React from "react";
import { createRoot } from "react-dom/client";
import Forms from "./Forms.jsx";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
<React.StrictMode> <Forms />
</React.StrictMode>
);
