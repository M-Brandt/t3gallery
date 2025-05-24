import Link from "next/link";

const mockUrls = [
  "https://e540edk8dg.ufs.sh/f/VTXAOElZAeIOAkLJBf7wmnRh76ApOSkj3fqCbgTzZ28vY0GD",
  "https://e540edk8dg.ufs.sh/f/VTXAOElZAeIOYab0oJmnQalr0i6gCcTbWyAsfRXGtKD3F8oq",
  "https://e540edk8dg.ufs.sh/f/VTXAOElZAeIOj1sKV18p4OmiSgNR2nJXhk7U6FyHlAoxT0Vq",
  "https://e540edk8dg.ufs.sh/f/VTXAOElZAeIOmPCfNuRAMJPatuyW79CG8vwd3RFZE4XSnoBe",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      Hello (Gallery in Progress)
    </main>
  );
}
