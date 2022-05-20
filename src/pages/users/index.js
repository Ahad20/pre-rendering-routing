import axios from "axios";
import User from "../../components/User";

const UserList = ({ data }) => {
  return (
    <div>
      <h1>User List page</h1>
      {data.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      data: data.results.slice(0, 3),
    },
  };
}
