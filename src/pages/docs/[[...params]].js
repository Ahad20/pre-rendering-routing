import { useRouter } from "next/router";

const CatchAllRoutes = () => {
  const router = useRouter();
  console.log(router.query);
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing Docs for feature {params[0]}</h1>;
  }

  return <h1>Docs Home page</h1>;
};

export default CatchAllRoutes;
