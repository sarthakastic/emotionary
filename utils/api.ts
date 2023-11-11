import { DELETE, PATCH } from "@/app/api/journal/[id]/route";
import { POST } from "@/app/api/journal/route";

const createURL = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL("/api/journal"), {
      method: "POST",
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const askQuestion = async (question: string) => {
  const res = await fetch(
    new Request(createURL("/api/question"), {
      method: "POST",
      body: JSON.stringify({ question }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const deleteJournal = async (body: any) => {
  console.log(body, "body");
  const res = await fetch(
    new Request(createURL(`/api/journal/${body.id}`), {
      method: "DELETE",
      body: JSON.stringify(body),
    })
  );
  console.log(res, "res");
  if (res.ok) {
    const data = await res.json();
    return res;
  }
};
