"use client";

import { askQuestion } from "@/utils/api";
import { load } from "langchain/load";
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
          className="border border-black/20 px-4 py-2 text-lg rounded-lg  "
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 mx-2 px-4 py-2 rounded-lg text-lg hover:font-bold hover:underline  "
        >
          Ask
        </button>
      </form>
      {loading && <div>...loading</div>}

      {response ? (
        <div>{response}</div>
      ) : (
        <div className="text-gray-800/25 font-bold p-2 ">
          ex : How was my day yesterday?
        </div>
      )}
    </div>
  );
};

export default Question;
