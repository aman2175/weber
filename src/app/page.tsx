import { prisma } from "@/lib/db";

const Page = async () => {

  const users = await prisma.user.findMany();

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <p>Total Users: {users.length}</p>
    </div>
  );
};

export default Page;
