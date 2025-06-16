// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   GridItem,
//   Heading,
//   Spinner,
//   Text,
//   Textarea,
//   useToast,
//   Flex,
//   IconButton,
// } from "@chakra-ui/react";
// import { EditIcon, CheckIcon } from "@chakra-ui/icons";
// import { useDispatch, useSelector } from "react-redux";
// import { getAboutUs, updateAboutUs } from "../redux/actions";
// import AdminNavbar from "../components/adminComponents/AdminNavbar";

// function DashAboutUs() {
//   const dispatch = useDispatch();
//   const toast = useToast();

//   const aboutUs = useSelector((state) => state.aboutUs);
//   const loading = useSelector((state) => state.loadingAboutUs);
//   const updating = useSelector((state) => state.updatingAboutUs);
//   const error = useSelector((state) => state.errorUpdateAboutUs);

//   const [editingField, setEditingField] = useState(null);
//   const [editedContent, setEditedContent] = useState(null);

//   useEffect(() => {
//     dispatch(getAboutUs());
//   }, [dispatch]);

//   useEffect(() => {
//     if (aboutUs) setEditedContent(aboutUs);
//   }, [aboutUs]);

//   const handleChange = (field, value) => {
//     setEditedContent((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSave = async (field) => {
//     if (!aboutUs?._id || !editedContent) return;

//     dispatch(updateAboutUs(aboutUs._id, { [field]: editedContent[field] }));

//     toast({
//       title: "Updated successfully.",
//       description: `${field} section saved.`,
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });

//     setEditingField(null);
//   };

//   if (loading || !aboutUs || !editedContent) {
//     return (
//       <>
//         <AdminNavbar />
//         <Box textAlign="center" mt={10}>
//           <Spinner size="lg" />
//         </Box>
//       </>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
//       <Box maxW="1200px" mx="auto" mt={10} px={4}>
//         <Grid
//           templateColumns={{ base: "1fr", md: "1fr 1fr" }}
//           gap={10}
//           alignItems="start"
//         >
//           {/* Left: About Us Description */}
//           <GridItem>
//             <Flex align="center" justify="space-between" mb={2}>
//               <Heading as="h2" size="xl">
//                 {aboutUs?.title || "About Us"}
//               </Heading>
//               {editingField !== "description" ? (
//                 <IconButton
//                   icon={<EditIcon />}
//                   size="sm"
//                   onClick={() => setEditingField("description")}
//                   aria-label="Edit Description"
//                 />
//               ) : (
//                 <IconButton
//                   icon={<CheckIcon />}
//                   size="sm"
//                   onClick={() => handleSave("description")}
//                   aria-label="Save Description"
//                   isLoading={updating}
//                 />
//               )}
//             </Flex>

//             {editingField === "description" ? (
//               <Textarea
//                 fontSize="lg"
//                 value={editedContent.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//                 rows={8}
//               />
//             ) : (
//               <Text fontSize="lg" whiteSpace="pre-wrap">
//                 {aboutUs?.description}
//               </Text>
//             )}
//           </GridItem>

//           {/* Right: Mission (push down) */}
//           <GridItem
//             textAlign={{ base: "left", md: "right" }}
//             mt={{ base: 0, md: 24 }} // Push down on desktop
//           >
//             <Flex align="center" justify="space-between" mb={2}>
//               <Heading as="h2" size="xl">
//                 Our Mission
//               </Heading>
//               {editingField !== "mission" ? (
//                 <IconButton
//                   icon={<EditIcon />}
//                   size="sm"
//                   onClick={() => setEditingField("mission")}
//                   aria-label="Edit Mission"
//                 />
//               ) : (
//                 <IconButton
//                   icon={<CheckIcon />}
//                   size="sm"
//                   onClick={() => handleSave("mission")}
//                   aria-label="Save Mission"
//                   isLoading={updating}
//                 />
//               )}
//             </Flex>

//             {editingField === "mission" ? (
//               <Textarea
//                 fontSize="lg"
//                 value={editedContent.mission}
//                 onChange={(e) => handleChange("mission", e.target.value)}
//                 rows={8}
//               />
//             ) : (
//               <Text fontSize="lg" whiteSpace="pre-wrap">
//                 {aboutUs?.mission}
//               </Text>
//             )}
//           </GridItem>
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default DashAboutUs;
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
  Textarea,
  useToast,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAboutUs, updateAboutUs } from "../redux/actions";
import AdminNavbar from "../components/adminComponents/AdminNavbar";

function DashAboutUs() {
  const dispatch = useDispatch();
  const toast = useToast();

  const aboutUs = useSelector((state) => state.aboutUs);
  const loading = useSelector((state) => state.loadingAboutUs);
  const updating = useSelector((state) => state.updatingAboutUs);
  const error = useSelector((state) => state.errorUpdateAboutUs);

  const [editingField, setEditingField] = useState(null);
  const [editedContent, setEditedContent] = useState(null);

  useEffect(() => {
    dispatch(getAboutUs());
  }, [dispatch]);

  useEffect(() => {
    if (aboutUs) setEditedContent(aboutUs);
  }, [aboutUs]);

  const handleChange = (field, value) => {
    setEditedContent((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (field) => {
    if (!aboutUs?._id || !editedContent) return;

    const original = aboutUs[field];
    const updated = editedContent[field];

    if (original !== updated) {
      dispatch(updateAboutUs(aboutUs._id, { [field]: updated }));

      toast({
        title: "Updated successfully.",
        description: `${field} section saved.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

    setEditingField(null); // Exit edit mode in all cases
  };

  if (loading || !aboutUs || !editedContent) {
    return (
      <>
        <AdminNavbar />
        <Box textAlign="center" mt={10}>
          <Spinner size="lg" />
        </Box>
      </>
    );
  }

  return (
    <>
      <AdminNavbar />
      <Box maxW="1200px" mx="auto" mt={10} px={4}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          alignItems="start"
        >
          {/* Left Side: About Us Description */}
          <GridItem>
            <Flex align="center" justify="space-between" mb={2}>
              <Heading as="h2" size="xl">
                {aboutUs?.title || "About Us"}
              </Heading>
              {editingField !== "description" ? (
                <IconButton
                  icon={<EditIcon />}
                  size="sm"
                  onClick={() => setEditingField("description")}
                  aria-label="Edit Description"
                />
              ) : (
                <IconButton
                  icon={<CheckIcon />}
                  size="sm"
                  onClick={() => handleSave("description")}
                  aria-label="Save Description"
                  isLoading={updating}
                />
              )}
            </Flex>

            {editingField === "description" ? (
              <Textarea
                fontSize="lg"
                value={editedContent.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={8}
              />
            ) : (
              <Text fontSize="lg" whiteSpace="pre-wrap">
                {aboutUs?.description}
              </Text>
            )}
          </GridItem>

          {/* Right Side: Mission (pushed down on larger screens) */}
          <GridItem
            textAlign={{ base: "left", md: "right" }}
            mt={{ base: 0, md: 24 }} // Push down on desktop
          >
            <Flex align="center" justify="space-between" mb={2}>
              <Heading as="h2" size="xl">
                Our Mission
              </Heading>
              {editingField !== "mission" ? (
                <IconButton
                  icon={<EditIcon />}
                  size="sm"
                  onClick={() => setEditingField("mission")}
                  aria-label="Edit Mission"
                />
              ) : (
                <IconButton
                  icon={<CheckIcon />}
                  size="sm"
                  onClick={() => handleSave("mission")}
                  aria-label="Save Mission"
                  isLoading={updating}
                />
              )}
            </Flex>

            {editingField === "mission" ? (
              <Textarea
                fontSize="lg"
                value={editedContent.mission}
                onChange={(e) => handleChange("mission", e.target.value)}
                rows={8}
              />
            ) : (
              <Text fontSize="lg" whiteSpace="pre-wrap">
                {aboutUs?.mission}
              </Text>
            )}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default DashAboutUs;
