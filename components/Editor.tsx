"use client";

import { updateEntry } from "@/utils/api";
import { useEffect, useState } from "react";
import { useAutosave } from "react-autosave";
import Image from "./Image";
import AiImage from "./Image";
import { useLoadContext } from "@/utils/context";
// import { openai } from "../utils/openai";

const Editor = ({ entry }: { entry: any }) => {
  const [value, setValue] = useState(entry?.content);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [analysis, setAnalysis] = useState(entry?.analysis);

  const { setLoading } = useLoadContext();

  const { mood, summary, color, subject, negative } = entry?.analysis;
  const analysisData = [
    {
      name: "Subject",
      value: subject,
    },
    {
      name: "Summary",
      value: summary,
    },
    {
      name: "Mood",
      value: mood,
    },
    {
      name: "Negative",
      value: negative ? "True" : "False",
    },
  ];

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const data = await updateEntry(entry.id, _value);
      setAnalysis(data?.analysis);
      setIsLoading(false);
    },
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row  text-2xl   ">
      <div className="col-span-2">
        {isLoading && <div>Saving</div>}
        {/* <Image /> */}

        <textarea
          className="w-[97vw]  lg:w-[60vw] h-[95%] min-h-[200px] p-8 text-2xl outline-none border border-orange-400 lg:m-20 m-2 mt-20 "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-black/10 mr-5">
        <div className=" px-6 py-10 mt-10 " style={{ backgroundColor: color }}>
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className=" px-2 py-4 border-t border-b border-black/10 flex items-center justify-between "
              >
                <span className="text-lg font-semibold ">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* <AiImage mood={entry?.analysis?.summary} /> */}
      </div>
    </div>
  );
};

export default Editor;
