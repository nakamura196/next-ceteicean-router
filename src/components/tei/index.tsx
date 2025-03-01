"use client";

import React from "react";
import CETEI from "CETEIcean";
import { TEIRender, TEIRoute } from "react-teirouter";
import { Div } from "@/components/tei/element/div";
import { PersName } from "@/components/tei/element/persname";
import { P } from "@/components/tei/element/p";
import { Seg } from "@/components/tei/element/seg";
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
          style={{ writingMode: "vertical-rl", height: "calc(100vh - 128px)" }}
        >
          <TEIRender data={teiElement}>
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 128px)",
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
