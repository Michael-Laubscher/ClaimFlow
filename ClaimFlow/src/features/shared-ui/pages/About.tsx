import { PageBanner } from "@/shared/components/design-system/banner/banner";
import { CoreValuesSection } from "../components/sections/CoreValuesSection";
import { ImpactStatsSection } from "../components/sections/ImpactStatsSection";
import { MissionVisionSection } from "../components/sections/MissionVisionSection";
import { OurStorySection } from "../components/sections/OurStorySection";

import { banners } from "../configs/banners.config";
import { coreValues, impactStats, missionVision, ourStory } from "../configs/about.config.data";


export default function AboutPage() {
  return (
    <>
      <PageBanner {...banners.about} />

      <OurStorySection paragraphs={ourStory.paragraphs} />

      <MissionVisionSection items={missionVision} />

      <CoreValuesSection values={coreValues} />

      <ImpactStatsSection stats={impactStats} />
    </>
  );
}
