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

  const imageGeneration = async () => {
    console.log("first");
    // const response = await openai.images.generate({
    //   model: "dall-e-3",
    //   prompt: "a pan cake",
    //   n: 1,
    //   size: "1024x1024",
    // });

    // setImageUrl(response?.data[0].url);
  };

  const { mood, summary, color, subject, negative } = analysis;
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
      setAnalysis(data.analysis);
      setIsLoading(false);
    },
  });

  useEffect(() => {
    setLoading(false);
    imageGeneration();
  }, []);

  return (
    <div className="w-full h-full text-2xl grid grid-cols-3 border-l border-orange-400 ">
      <div className="col-span-2">
        {isLoading && <div>Saving</div>}
        {/* <Image /> */}

        <textarea
          className="w-full h-full p-8 text-2xl outline-none border m-2 "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-black/10 ">
        <div className=" px-6 py-10 " style={{ backgroundColor: color }}>
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
