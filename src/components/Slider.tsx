import Swiper from "@/components/Swiper";

import { MediaList } from "@/lib/types";

interface SliderProps {
  fetchMedias: () => Promise<MediaList>;
}

async function Slider({ fetchMedias }: SliderProps) {
  const { medias } = await fetchMedias();

  return <Swiper medias={medias} />;
}

export default Slider;
