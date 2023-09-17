import { Plus } from "lucide-react";
import useAccountModal from "../../hooks/useAccountModal";
import ProfileCard from "../cards/ProfileCard";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

interface AccountsTableProps {}

const AccountsTable: React.FC<AccountsTableProps> = ({}) => {
  const accountmodal = useAccountModal()
  return (
    <div className="w-full flex flex-col items-start  bg-white rounded-2xl p-6 space-y-6">
            <div className="px-4 flex w-full items-center justify-between">
        <div>
          <h1 className="font-bold text-xl text-gray-500">Your Accounts </h1>
        </div>
        <div>
          <Button className="flex bg-gradient-to-r from-[#2acb96] via-[#1ccc94] to-[#3ecc9c] text-white rounded-3xl hover:bg-[#2acb96]/20" onClick={() => accountmodal.onOpen()}>
            Add New
            <Plus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="text-gray-400">
            <TableHead className="text-start">Profile</TableHead>
            <TableHead className="text-center">DMs Sent</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} >
              <TableCell className=""><ProfileCard name='joshua' username="joshua" pfp="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
</TableCell>
              <TableCell className="text-center">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AccountsTable;
