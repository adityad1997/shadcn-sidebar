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
  
  const entries = [
    {
      srNo: "46721",
      name: "Rajesh ji",
      number: "9887122097",
      image: "https://via.placeholder.com/50",
      shopName: "Jay Mata di restorent",
      area: "6RXV+HHM, Binayka, Rajasthan 324008, India",
      wdCode: "JP3360",
      latitude: "25.2494785",
      longitude: "75.8437016",
      duplicate: "No",
    },
    {
      srNo: "46720",
      name: "Santosh Sharma",
      number: "7357699964",
      image: "https://via.placeholder.com/50",
      shopName: "Jay mata di restorent",
      area: "7R2W+FCH, Bundi, Rajasthan 324008, India",
      wdCode: "JP3395",
      latitude: "25.2512780",
      longitude: "75.8458616",
      duplicate: "Yes",
    },
    {
      srNo: "46719",
      name: "KUNJBIHARI",
      number: "9828121593",
      image: "https://via.placeholder.com/50",
      shopName: "Vanshika kirana store",
      area: "01bajrang Nagar, Bajrang Nagar Main Rd, Gopal Vihar 1, Police Line,",
      wdCode: "JP3395",
      latitude: "25.1857975",
      longitude: "75.8663674",
      duplicate: "Yes",
    },
  ];
  
  export function TableDemo() {
    const { theme } = useTheme(); // Get the current theme (light or dark)
  
    // Set icon colors based on theme
    const iconColor = theme === "dark" ? "text-white" : "text-black";
  
    return (
      <Table>
        <TableCaption>Entries</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Sr. no</TableHead>
            <TableHead>Hawker Name</TableHead>
            <TableHead>Hawker Number</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Actions</TableHead>
            <TableHead>Shop Name</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Wd Code</TableHead>
            <TableHead>Latitude</TableHead>
            <TableHead>Longitude</TableHead>
            <TableHead>Duplicate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.srNo}>
              <TableCell>{entry.srNo}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.number}</TableCell>
              <TableCell>
                <Image
                  src={entry.image}
                  alt="Hawker Image"
                  width={50}
                  height={50}
                  className="rounded"
                />
              </TableCell>
              <TableCell>
                <Button variant="success" className="mr-2 flex items-center gap-1">
                  <CheckCircle className={`w-4 h-4 ${iconColor}`} />
                  Accept
                </Button>
                <Button variant="danger" className="flex items-center gap-1">
                  <XCircle className={`w-4 h-4 ${iconColor}`} />
                  Reject
                </Button>
              </TableCell>
              <TableCell>{entry.shopName}</TableCell>
              <TableCell>{entry.area}</TableCell>
              <TableCell>{entry.wdCode}</TableCell>
              <TableCell>{entry.latitude}</TableCell>
              <TableCell>{entry.longitude}</TableCell>
              <TableCell>{entry.duplicate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  
  export default TableDemo;
  