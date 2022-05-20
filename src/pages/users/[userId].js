import axios from "axios";
import User from "../../components/User";
import { useRouter } from "next/router";

const UserList = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <h2>character name : {data.name}</h2>
      <p>
        {data.status} - {data.species} - {data.gender}
      </p>
    </div>
  );
};

export default UserList;

export async function getStaticPaths() {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/character/`);

  const userPaths = data.results.map((user) => {
    return {
      params: { userId: `${user.id}` },
    };
  });

  // return {
  //   paths: [
  //     {
  //       params: { userId: "1" },
  //     },
  //   ],
  // };

  return {
    paths: userPaths.slice(0, 3),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${params.userId}`);
  console.log(`genrating page for params ${params.userId}`);
  if (!data.id) {
    return { notFound: true };
  }
  return {
    props: {
      data: data,
    },
  };
}
