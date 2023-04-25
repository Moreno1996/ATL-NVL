import Link from "next/link";

const Home = () => {
  const text = [
    {
      title: "Nijmeegse vragenlijst",
      slug: "NVL",
      content:"De NVL is een vragenlijst bestaande uit de 16 meest voorkomende klachten bij een Dysfunctionele Ademhaling "
    },
    {
      title: "Algemene toestand lijst",
      slug: "NVL",
      content:"Deze vragenlijst is ontworpen vanuit het concept ‘gewone overspanning’ dat verwijst naar een gespannenheid in het algemene functioneren, die een voorloper en een voedingsbodem zou zijn voor het ontwikkelen van spanningsklachten"
    },
  ];
  return (
    <div className="container flex flex-col gap-4 mx-auto mt-8">
      {text.map((page) => {
        return (
          <Link key={page?.slug} href={page?.slug}>
            <div class="block max-w-sm  mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {page?.title}{" "}
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {page?.content}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
