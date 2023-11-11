"use client";

import { askQuestion } from "@/utils/api";
import { load } from "langchain/load";
import { Bot } from "lucide-react";
import { SetStateAction, useState } from "react";

const Question = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const answer = await askQuestion(value);
    setResponse(answer);
    setValue("");
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask a question"
          className="border font-serif border-b-orange-400 text-orange-400 placeholder:text-orange-400 px-4 py-2 text-lg rounded-lg bg-orange-200  "
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-orange-200 font-serif mx-2 border border-orange-400 text-orange-400 px-4 py-2 rounded-lg text-lg hover:font-bold hover:underline hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#FFA500,0_0_15px_#FFA500,0_0_30px_#FFA500] "
        >
          Ask
        </button>
      </form>
      {loading && (
        <div className="font-serif">
          <Bot /> ...analyzing
        </div>
      )}

      {response ? (
        <div className="bg-orange-50 text-2xl border border-orange-400 p-5 rounded-sm text-orange-400 mt-5 ">
          {response}
        </div>
      ) : (
        <div className="text-gray-800/25 font-serif font-bold p-2 ">
          ex : How was my day yesterday?
        </div>
      )}
    </div>
  );
};

export default Question;
