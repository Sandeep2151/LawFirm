import React from "react";
import ReactDOMClient from "react-dom/client";
import { LawFirm } from "./screens/LawFirm";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LawFirm />);
