import { GradientMesh } from "../layout/GradientMesh";
import { GradientOrbs } from "../layout/GradientOrbs";
import { AmbientRings } from "../layout/AmbientRings";
import { GridPattern } from "../layout/GridPattern";
import { NoiseTexture } from "../layout/NoiseTexture";
import { FloatingParticles } from "../layout/FloatingParticles";                

export function HeroBackground() {
  return (
    <>
      <GradientMesh />

      <GradientOrbs />

      <AmbientRings />

      <GridPattern />

      <NoiseTexture />

      <FloatingParticles />
    </>
  );
}