import { openai } from "@/utils/openai";
import Image from "next/image";
import BlurImage from "./BlurImage";

const AiImage = async ({ mood }: { mood: string | undefined }) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `a comic image using disney's character depicting a person's life having a day like ${mood} maybe along with some dialog in english `,
    n: 1,
    size: "1024x1024",
  });

  let image = response.data[0].url;

  if (!response?.created) return;

  console.log(response, "dalle");

  if (typeof image === "string") return <BlurImage image={image} />;
};

export default AiImage;
