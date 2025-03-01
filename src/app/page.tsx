import React from "react";
import Render from "@/components/tei";
export default function App() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
    <TEI xmlns="http://www.tei-c.org/ns/1.0">
      <text>
        <body>
          <div type="original">
            私の名前は<persName corresp="#id1">山田太郎</persName>です。
          </div>
          <div>
            <p style="color: green;">こんにちは</p>
            <p style="color: green;">こんばんは <seg style="color: blue;">xxx</seg>
            </p>
          </div>
        </body>
      </text>
    </TEI>`;

  return <Render xmlContent={xmlContent} />;
}
