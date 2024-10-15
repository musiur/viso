import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Home___Gallery() {
  return (
    <section id="photos" className="container section">
        <h2 className="text-4xl font-bold text-center mb-10">
          We are in Gallery
        </h2>
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <Image
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
                width={800}
                height={600}
              />
            </BlurFade>
          ))}
        </div>
      </section>
  );
}
