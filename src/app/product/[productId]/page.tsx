export default async function Page({
    params,
  }: {
    params: Promise<{ productId: string }>
  }) {
    const page = (await params).productId;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dynamic page {page}</h1>
        </main>
    );
  }