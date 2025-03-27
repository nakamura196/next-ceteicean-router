"use client";

import React from "react";
import CETEI from "CETEIcean";
import { TEIRoute, TEIRender } from "react-teirouter";

const Facsimile = () => {
  return null;
};

export default function Render({ xmlContent }: { xmlContent: string }) {
  const [teiDoc, setTeiDoc] = React.useState<Document | null>(null);
  const teiContentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      // CETEIceanをインスタンス化
      const CETEIcean = new CETEI();

      const data = await CETEIcean.makeHTML5(xmlContent);

      setTeiDoc(data);
    };

    fetchData();
  }, [xmlContent]);

  // fetchDataの修正
  React.useEffect(() => {
    const rawXpath = "/TEI/text[1]/body[1]/p[1]/seg[267]";

    const xpath = rawXpath
      .replace(/^\//, "") // 先頭のスラッシュを削除
      .replace(/([A-Za-z]+)(?=\/|\[|$)/g, "tei-$1") // tei-プレフィックスを追加
      .toLowerCase();

    if (teiContentRef.current) {
      const result = document.evaluate(
        xpath,
        teiContentRef.current,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      );

      const targetElement = result.singleNodeValue as HTMLElement;
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        targetElement.style.backgroundColor = "yellow";
      }
    }
  }, [teiDoc]);

  if (teiDoc) {
    const teiElement = teiDoc.querySelector("tei-tei") as HTMLElement;
    if (teiElement) {
      return (
        <div
          className=""
          ref={teiContentRef}
          style={{
            width: "100%",
            writingMode: "vertical-rl",
            height: "calc(100vh - 128px)",
            overflowX: "auto",
            overflowY: "hidden" as const,
          }}
          onWheel={(e) => {
            e.currentTarget.scrollLeft += e.deltaY;
          }}
        >
          <TEIRender data={teiElement}>
            <TEIRoute el="tei-facsimile" component={Facsimile} />
          </TEIRender>
        </div>
      );
    }
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 128px)",
        overflowX: "auto",
        overflowY: "hidden" as const,
      }}
    >
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          fontSize: "24px",
        }}
      >
        Loading TEI...
      </h1>
    </div>
  );
}
