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

const entries = [
  {
    srNo: "1",
    name: "Rajesh Shah",
    number: "9887122097",
    image: "https://via.placeholder.com/50",
    shopName: "Vanshika Kirana Store",
    city: "Jaipur",
    wdCode: "JP3360",
  },
  {
    srNo: "2",
    name: "Santosh Sharma",
    number: "7357699964",
    image: "https://via.placeholder.com/50",
    shopName: "A-Start Restaurant",
    city: "Jaipur",
    wdCode: "JP3395",
  },
  {
    srNo: "3",
    name: "KUNJBIHARI",
    number: "9828121593",
    image: "https://via.placeholder.com/50",
    shopName: "Jay Mata Di Pan Center",
    city: "Jaipur",
    wdCode: "JP3395",
  },
];

export function TableDemo() {
  const { theme } = useTheme(); // Get the current theme (light or dark)
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // State to manage lightbox visibility
  const [lightboxImage, setLightboxImage] = useState(""); // State to hold the clicked image URL

  // Set icon colors based on theme
  const iconColor = theme === "dark" ? "text-white" : "text-black";

  const handleAction = (action, entry) => {
    setConfirmationMessage(`Entry ${action}`);
    setTimeout(() => setConfirmationMessage(null), 2000); 
  };

  const openLightbox = (imageSrc) => {
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
                  alt={`${entry.name} Image`}
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
                <div className="flex justify-center h-full">
                  <Button onClick={() => handleAction("Accepted", entry)} variant="success" className="mb-2 flex items-center gap-1">
                    <CheckCircle className={`w-4 h-4 text-green-500 ${iconColor}`} />
                    Accept
                  </Button>
                  <Button onClick={() => handleAction("Rejected", entry)} variant="danger" className="flex items-center gap-1">
                    <XCircle className={`w-4 h-4 text-red-500 ${iconColor}`} />
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
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the lightbox
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
