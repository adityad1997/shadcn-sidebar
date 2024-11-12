import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react"; // Lucide icons
import { useTheme } from "next-themes"; // ShadCN's theme management

// Adding random city names from Rajasthan
const cities = [
  "Jaipur", "Udaipur", "Jodhpur", "Bikaner", "Kota", "Ajmer", "Alwar", "Pali", "Chittorgarh", "Sikar"
];

const entries = [
  {
    srNo: "46721",
    name: "Rajesh ji",
    number: "9887122097",
    image: "https://via.placeholder.com/50",
    shopName: "Jay Mata di restorent",
    city: "Jaipur",
    wdCode: "JP3360",
  },
  {
    srNo: "46720",
    name: "Santosh Sharma",
    number: "7357699964",
    image: "https://via.placeholder.com/50",
    shopName: "Jay mata di restorent",
    city: "Udaipur",
    wdCode: "JP3395",
  },
  {
    srNo: "46719",
    name: "KUNJBIHARI",
    number: "9828121593",
    image: "https://via.placeholder.com/50",
    shopName: "Vanshika kirana store",
    city: "Jodhpur",
    wdCode: "JP3395",
  },
];

export function TableDemo() {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  // Set icon colors based on theme
  const iconColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="my-4">
      {/* Title and Subtitle */}
      <h2 className="text-xl font-semibold text-center">Latest Entries</h2>
      <p className="text-sm text-center text-gray-600">Here are the latest entries, please review the entries and take action.</p>

      <Table className="mt-6">
        <TableCaption className="m-0"></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="border">Sr. no</TableHead>
            <TableHead className="border">DS Name</TableHead>
            <TableHead className="border">Image</TableHead>
            <TableHead className="border">Shop Name</TableHead>
            <TableHead className="border">City</TableHead>
            <TableHead className="border">WD Code</TableHead>
            <TableHead className="border">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.srNo}>
              <TableCell className="border">{entry.srNo}</TableCell>
              <TableCell className="border">{entry.name}</TableCell>
              <TableCell className="border">
                <Image
                  src={entry.image}
                  alt={`${entry.name} Image`}
                  width={50}
                  height={50}
                  className="rounded"
                />
              </TableCell>
              <TableCell className="border">{entry.shopName}</TableCell>
              <TableCell className="border">{entry.city}</TableCell>
              <TableCell className="border">{entry.wdCode}</TableCell>
              <TableCell className="border">
                <Button variant="success" className="mr-2 flex items-center gap-1">
                  <CheckCircle className={`w-4 h-4 ${iconColor}`} />
                  Accept
                </Button>
                <Button variant="danger" className="flex items-center gap-1">
                  <XCircle className={`w-4 h-4 ${iconColor}`} />
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableDemo;
