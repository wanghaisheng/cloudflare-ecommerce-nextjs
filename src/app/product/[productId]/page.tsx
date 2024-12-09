export default async function Page({
    params,
  }: {
    params: Promise<{ dynamicPage: string }>
  }) {
    const page = (await params).dynamicPage;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dynamic page {page}</h1>
        </main>
    );
  }