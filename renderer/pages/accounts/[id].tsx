import Link from "next/link";
import { useRouter } from "next/router";


interface AccountPageProps {

}

const AccountPage: React.FC<AccountPageProps> = ({}) => {
    const router = useRouter();

  // Access route information
  const { query } = router;
  const accountId = query.id;
  if (!accountId) {
    router.push
  }
  return (
    <div>
        Here: {accountId}
        <Link href={'/accounts'}>Click</Link>
    </div>
  );
};

export async function getStaticPaths() {
  }
  

export default AccountPage;