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
      slug: "ATL",
      content:"Deze vragenlijst is ontworpen vanuit het concept ‘gewone overspanning’ dat verwijst naar een gespannenheid in het algemene functioneren, die een voorloper en een voedingsbodem zou zijn voor het ontwikkelen van spanningsklachten"
    },
  ];
  return (
    <div className="flex flex-col gap-4 mx-4 mt-8">
      {text.map((page) => {
        return (
          <Link key={page?.slug} href={page?.slug}>
            <div className="block max-w-md   p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {page?.title}{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
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
