'use client';

import RunnerCard from "../../components/cards/RunnerCard";
import Loader from "../../components/Loader";
import ErrorModal from "../../components/modals/ErrorModal";
import Wrapper from "../../components/providers/Wrapper";

interface InboxPageProps {

}

const InboxPage: React.FC<InboxPageProps> = ({}) => {
  return (
    <Wrapper>
        <div className="font-bold text-gray-500 px-6 pt-6 text-lg">
            DM Own Inbox
        </div>
        <RunnerCard status='running' username='joshua' pfp="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9uZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
    </Wrapper>
  );
};

export default InboxPage;