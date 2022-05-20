import Link from "next/link";

const User = ({ user }) => {
  return (
    <Link href={`/users/${user.id}`} passHref>
      <div>
        <h2>
          user name : {user.name} - userId : {user.id}
        </h2>
        <hr />
      </div>
    </Link>
  );
};

export default User;
