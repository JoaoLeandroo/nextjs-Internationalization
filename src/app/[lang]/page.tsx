import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const t = await getDictionary(lang);
  return (
    <div>
        <h1>{t.home.title}</h1>
    </div>
  );
}
