import { db } from "~/server/db";
export const dynamic = "force-dynamic";
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

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <div>{post.name}</div>
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      Hello (Gallery in Progress)
    </main>
  );
}
