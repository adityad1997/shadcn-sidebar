'use client';

import { useState } from "react";
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
import { CheckCircle, XCircle } from "lucide-react";
import { useTheme } from "next-themes";

// Sample data for cities in Rajasthan
const cities = [
  "Jaipur", "Udaipur", "Jodhpur", "Bikaner", "Kota", "Ajmer", "Alwar", "Pali", "Chittorgarh", "Sikar"
];

const initialEntries = [
  {
    srNo: "1",
    name: "Rajesh Shah",
    image: "/images/default-image.png",
    shopName: "Vanshika Kirana Store",
    city: "Jaipur",
    wdCode: "JP3360",
  },
  {
    srNo: "2",
    name: "Santosh Sharma",
    image: "/images/default-image.png",
    shopName: "A-Start Restaurant",
    city: "Jaipur",
    wdCode: "JP3395",
  },
  {
    srNo: "3",
    name: "Anil Kumar",
    image: "/images/default-image.png",
    shopName: "Jay Mata Di Pan Center",
    city: "Jaipur",
    wdCode: "JP3395",
  },
  {
    srNo: "4",
    name: "Anil Kumar",
    image: "/images/default-image.png",
    shopName: "Sweets & Snacks",
    city: "Udaipur",
    wdCode: "UD4200",
  },
  {
    srNo: "5",
    name: "Ravi Sharma",
    image: "/images/default-image.png",
    shopName: "Shree Ram Hardware",
    city: "Jodhpur",
    wdCode: "JD5032",
  },
  {
    srNo: "6",
    name: "Manoj Soni",
    image: "/images/default-image.png",
    shopName: "Manoj Mart",
    city: "Bikaner",
    wdCode: "BK6001",
  },
  {
    srNo: "7",
    name: "Rajesh Shah",
    image: "/images/default-image.png",
    shopName: "Neelam Stationery Store",
    city: "Kota",
    wdCode: "KT6123",
  },
  {
    srNo: "8",
    name: "Ravi Sharma",
    image: "/images/default-image.png",
    shopName: "Sharma Stationery Shop",
    city: "Ajmer",
    wdCode: "AJ7345",
  },
  {
    srNo: "9",
    name: "Arvind Yadav",
    image: "/images/default-image.png",
    shopName: "Arvind General Store",
    city: "Alwar",
    wdCode: "AL8511",
  },
  {
    srNo: "10",
    name: "Rajesh Shah",
    image: "/images/default-image.png",
    shopName: "Pooja Stationery",
    city: "Pali",
    wdCode: "PL9200",
  },
  {
    srNo: "11",
    name: "Vijay Singh",
    image: "/images/default-image.png",
    shopName: "Vijay Shoe Mart",
    city: "Chittorgarh",
    wdCode: "CT1065",
  },
  {
    srNo: "12",
    name: "Rohit Meena",
    image: "/images/default-image.png",
    shopName: "Meena Mart ",
    city: "Sikar",
    wdCode: "SK1324",
  },
  {
    srNo: "13",
    name: "Kartik Mishra",
    image: "/images/default-image.png",
    shopName: "Mishra Stationery",
    city: "Udaipur",
    wdCode: "UD4532",
  },
  {
    srNo: "14",
    name: "Rohit Meena",
    image: "/images/default-image.png",
    shopName: "Geeta Stationery",
    city: "Jaipur",
    wdCode: "JP7777",
  },
];

export function TableDemo() {
  const { theme } = useTheme(); // Get the current theme (light or dark)
  const [entries, setEntries] = useState(initialEntries); // Use state to manage entries
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // State to manage lightbox visibility
  const [lightboxImage, setLightboxImage] = useState(""); // State to hold the clicked image URL

  // Set icon colors based on theme
  const iconColor = theme === "dark" ? "text-white" : "text-black";

  const handleAction = (action: string, entry: typeof entries[0]) => {
    setConfirmationMessage(`Entry ${action}`);
    setTimeout(() => setConfirmationMessage(null), 2000); 

    // Remove the entry from the table after action
    if (action === "Accepted" || action === "Rejected") {
      setEntries((prevEntries) => prevEntries.filter((e) => e.srNo !== entry.srNo));
    }
  };

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc); // Set the clicked image URL
    setIsLightboxOpen(true); // Open the lightbox
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false); // Close the lightbox
    setLightboxImage(""); // Clear the image URL
  };

  return (
    <div className="relative my-4">
      {/* Title and Subtitle */}
      <h2 className="text-xl font-semibold text-center">Latest Entries</h2>
      <p className="text-sm text-center text-gray-600">Here are the latest entries, please review the entries and take action.</p>

      <Table className="mt-6">
        <TableCaption className="m-0"></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="border text-center">Sr No</TableHead>
            <TableHead className="border text-center">DS Name</TableHead>
            <TableHead className="border text-center">Image</TableHead>
            <TableHead className="border text-center">Shop Name</TableHead>
            <TableHead className="border text-center">City</TableHead>
            <TableHead className="border text-center">WD Code</TableHead>
            <TableHead className="border text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.srNo}>
              <TableCell className="border text-center">{entry.srNo}</TableCell>
              <TableCell className="border text-center">{entry.name}</TableCell>
              <TableCell className="border text-center">
                <Image
                  src={entry.image}
                  alt="Default Image" 
                  width={50}  
                  height={50}  
                  className="rounded mx-auto cursor-pointer"
                  onClick={() => openLightbox(entry.image)} // Open lightbox on image click
                />
              </TableCell>
              <TableCell className="border text-center">{entry.shopName}</TableCell>
              <TableCell className="border text-center">{entry.city}</TableCell>
              <TableCell className="border text-center">{entry.wdCode}</TableCell>
              <TableCell className="border text-center min-h-full">
                <div className="flex justify-center h-full gap-2">
                  {/* Accept Button with Inline Styling */}
                  <Button
                    onClick={() => handleAction("Accepted", entry)}
                    className="mb-2 flex items-center gap-1 text-white bg-green-500 hover:bg-green-600 rounded px-4 py-2 text-sm"
                  >
                    <CheckCircle className={`w-4 h-4 ${iconColor}`} />
                    Accept
                  </Button>

                  {/* Reject Button with Inline Styling */}
                  <Button
                    onClick={() => handleAction("Rejected", entry)}
                    className="flex items-center gap-1 text-white bg-red-500 hover:bg-red-600 rounded px-4 py-2 text-sm"
                  >
                    <XCircle className={`w-4 h-4 ${iconColor}`} />
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Confirmation Message at the Bottom */}
      {confirmationMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded shadow-lg text-sm z-50">
          {confirmationMessage}
        </div>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <div 
            className="relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={lightboxImage}
              alt="Enlarged Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <button 
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
              onClick={closeLightbox}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableDemo;
