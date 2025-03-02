import React from "react";
import Render from "@/components/tei";
import fs from "fs";
import path from "path";

export default async function App() {
  const xmlFilePath = path.join(process.cwd(), "public", "data", "tei.xml");
  const xmlContent = fs.readFileSync(xmlFilePath, "utf-8");

  return <Render xmlContent={xmlContent} />;
}
