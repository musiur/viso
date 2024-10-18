import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

const images = [
  "https://i.ibb.co.com/nMZ1WrH/viso-1.jpg",
  "https://i.ibb.co.com/c2Mk5qv/viso-2.jpg",
  "https://i.ibb.co.com/44s0hJ4/viso-10.jpg",
  "https://i.ibb.co.com/ckZmCYc/viso-9.jpg",
  "https://i.ibb.co.com/0MLWCSg/viso-3.jpg",
  "https://i.ibb.co.com/HN8y9HJ/viso-4.jpg",
  "https://i.ibb.co.com/HKdFHBh/viso-5.jpg",
  "https://i.ibb.co.com/dmrNdrq/viso-6.jpg",
  "https://i.ibb.co.com/GR0syHz/viso-7.jpg",
  "https://i.ibb.co.com/JRg8k5N/viso-8.jpg",
];

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
