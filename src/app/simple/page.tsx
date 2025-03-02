"use client";

import React from "react";
import CETEI from "CETEIcean";
import "@/styles/tei.css";

export default function Simple() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
    <teiHeader>
        <fileDesc>
            <titleStmt>
                <title></title>
            </titleStmt>
            <publicationStmt>
                <p/>
            </publicationStmt>
            <sourceDesc>
                <p/>
            </sourceDesc>
        </fileDesc>
    </teiHeader>
    <text>
        <body>
            <div type="original">
                <ab>私の名前は<persName corresp="#id1">田中太郎</persName>です。</ab>
            </div>
            <div>
                <p style="color: green;">こんにちは</p>
                <p style="color: green;">こんばんは <seg style="color: blue;">xxx</seg>
                </p>
            </div>
        </body>
    </text>
</TEI>`;

  React.useEffect(() => {
    const CETEIcean = new CETEI();

    CETEIcean.addBehaviors({
      tei: {
        persName: function (elt) {
          const span = document.createElement("span");
          span.innerHTML = elt.innerHTML;
          span.classList.add("text-red-500");
          return span;
        },
        div: function (elt) {
          const div = document.createElement("div");
          div.innerHTML = elt.innerHTML;

          const classNames =
            "m-4 p-4 border border-gray-300 rounded shadow bg-white";
          for (const className of classNames.split(" ")) {
            div.classList.add(className);
          }
          return div;
        },
      },
    });

    const data = CETEIcean.makeHTML5(xmlContent);
    // setTeiDoc(data);
    document
      .getElementById("tei-container")
      ?.appendChild(data as unknown as Node);
  }, [xmlContent]);

  return (
    <div
      id="tei-container"
      style={{
        writingMode: "vertical-rl",
        height: "calc(100vh - 128px)",
      }}
    ></div>
  );
}
