"use client";

import React from "react";
import CETEI from "CETEIcean";
import { TEIRender, TEIRoute } from "react-teirouter";
import { Div } from "@/components/tei/element/div";
import { PersName } from "@/components/tei/element/persname";
import { P } from "@/components/tei/element/p";
import { Seg } from "@/components/tei/element/seg";

const Facsimile = () => {
  return null;
};

export default function Render({ xmlContent }: { xmlContent: string }) {
  const [teiDoc, setTeiDoc] = React.useState<Document | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      // CETEIceanをインスタンス化
      const CETEIcean = new CETEI();

      const data = await CETEIcean.makeHTML5(xmlContent);

      setTeiDoc(data);
    };

    fetchData();
  }, [xmlContent]);

  if (teiDoc) {
    const teiElement = teiDoc.querySelector("tei-tei");
    if (teiElement) {
      return (
        <div
          className=""
          style={{
            width: "100%",
            writingMode: "vertical-rl",
            height: "calc(100vh - 128px)",
            overflowX: "auto",
            overflowY: "hidden" as const,
          }}
          onWheel={(e) => {
            e.preventDefault();
            e.currentTarget.scrollLeft += e.deltaY;
          }}
        >
          <TEIRender data={teiElement}>
            <TEIRoute el="tei-facsimile" component={Facsimile} />
            <TEIRoute el="tei-div" component={Div} />
            <TEIRoute el="tei-p" component={P} />
            <TEIRoute el="tei-persname" component={PersName} />
            <TEIRoute el="tei-seg" component={Seg} />
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
