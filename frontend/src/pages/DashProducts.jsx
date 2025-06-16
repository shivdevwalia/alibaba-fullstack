// import React, { useEffect, useState } from "react";
// import AdminNavbar from "../components/adminComponents/AdminNavbar";
// import {
//   Box,
//   Button,
//   Flex,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   Spinner,
//   Text,
//   useDisclosure,
//   IconButton,
//   ModalFooter,
// } from "@chakra-ui/react";
// import { DeleteIcon } from "@chakra-ui/icons";
// import ProductForm from "../components/adminComponents/ProductForm";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, deleteProductAdmin } from "../redux/actions";

// function DashProducts() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const {
//     isOpen: isDeleteOpen,
//     onOpen: onDeleteOpen,
//     onClose: onDeleteClose,
//   } = useDisclosure();
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);

//   const products = useSelector((state) => state.products);
//   const loadingProducts = useSelector((state) => state.loadingProducts);
//   const errorProducts = useSelector((state) => state.errorProducts);
//   const loadingDelete = useSelector((state) => state.loadingDelete);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   const handleCardClick = (product) => {
//     setSelectedProduct(product);
//     setIsEditMode(true);
//     onOpen();
//   };

//   const handleCreateNew = () => {
//     setSelectedProduct(null);
//     setIsEditMode(false);
//     onOpen();
//   };

//   const handleDelete = (e, productId) => {
//     e.stopPropagation(); // Prevent card click when delete button is clicked
//     setProductToDelete(productId);
//     onDeleteOpen();
//   };

//   const confirmDelete = () => {
//     if (productToDelete) {
//       dispatch(deleteProductAdmin(productToDelete));
//       setProductToDelete(null);
//       onDeleteClose();
//     }
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <Flex bg={"gray.100"} flexDirection={"column"} align={"center"}>
//         <Flex
//           flexDirection={"row"}
//           justify={"space-between"}
//           my={3}
//           align={"center"}
//           width={"100%"}
//           px={8}
//         >
//           <Box>
//             <Text fontWeight={600}>Product Grid</Text>
//           </Box>
//           <Button
//             bgColor={"black"}
//             color={"white"}
//             _hover={{ bgColor: "gray.700" }}
//             onClick={handleCreateNew}
//           >
//             + Create new
//           </Button>
//         </Flex>

//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>
//               {isEditMode ? "Update Product" : "Create New Product"}
//             </ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <ProductForm
//                 onClose={onClose}
//                 initialData={selectedProduct}
//                 isEdit={isEditMode}
//               />
//             </ModalBody>
//           </ModalContent>
//         </Modal>

//         <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} size="sm">
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Delete Product</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <Text>
//                 Are you sure you want to delete this product? This action cannot
//                 be undone.
//               </Text>
//             </ModalBody>
//             <ModalFooter>
//               <Button colorScheme="gray" mr={3} onClick={onDeleteClose}>
//                 Cancel
//               </Button>
//               <Button
//                 colorScheme="red"
//                 onClick={confirmDelete}
//                 isLoading={loadingDelete}
//               >
//                 Delete
//               </Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>

//         {loadingProducts ? (
//           <Spinner size="xl" mt={6} />
//         ) : errorProducts ? (
//           <Text color="red.500" mt={6}>
//             {errorProducts}
//           </Text>
//         ) : (
//           <Flex wrap="wrap" justify="center" gap={4} px={4} py={6}>
//             {products.map((product) => (
//               <Box
//                 key={product._id}
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 p={4}
//                 width="200px"
//                 bg="white"
//                 boxShadow="sm"
//                 display="flex"
//                 alignItems="center"
//                 flexDirection="column"
//                 justifyContent="center"
//                 cursor="pointer"
//                 onClick={() => handleCardClick(product)}
//                 position="relative"
//               >
//                 <IconButton
//                   icon={<DeleteIcon />}
//                   size="sm"
//                   colorScheme="red"
//                   variant="ghost"
//                   position="absolute"
//                   top={2}
//                   right={2}
//                   onClick={(e) => handleDelete(e, product._id)}
//                   isLoading={loadingDelete}
//                   aria-label="Delete product"
//                   _hover={{ bg: "transparent", borderColor: "transparent" }}
//                 />
//                 <Text fontWeight="bold">{product.name}</Text>
//                 <Box my={2}>
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     style={{
//                       width: "100px",
//                       height: "150px",
//                       objectFit: "cover",
//                       borderRadius: "8px",
//                     }}
//                   />
//                 </Box>
//                 <Text fontSize="md">${product.price}</Text>
//               </Box>
//             ))}
//           </Flex>
//         )}
//       </Flex>
//     </>
//   );
// }

// export default DashProducts;

import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/adminComponents/AdminNavbar";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  IconButton,
  ModalFooter,
  Divider,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import ProductForm from "../components/adminComponents/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProductAdmin } from "../redux/actions";

function DashProducts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const products = useSelector((state) => state.products);
  const loadingProducts = useSelector((state) => state.loadingProducts);
  const errorProducts = useSelector((state) => state.errorProducts);
  const loadingDelete = useSelector((state) => state.loadingDelete);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsEditMode(true);
    onOpen();
  };

  const handleCreateNew = () => {
    setSelectedProduct(null);
    setIsEditMode(false);
    onOpen();
  };

  const handleDelete = (e, productId) => {
    e.stopPropagation();
    setProductToDelete(productId);
    onDeleteOpen();
  };

  const confirmDelete = () => {
    if (productToDelete) {
      dispatch(deleteProductAdmin(productToDelete));
      setProductToDelete(null);
      onDeleteClose();
    }
  };

  return (
    <>
      <AdminNavbar />
      <Flex bg="gray.100" flexDirection="column" align="center" minH="100vh">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          align="center"
          width="100%"
          px={8}
          py={4}
          bg="white"
          boxShadow="sm"
          gap={{ base: 3, md: 0 }}
        >
          <Text fontSize="2xl" fontWeight="semibold" color="gray.800">
            Product Management
          </Text>
          <Button
            bgColor="#f60"
            color="white"
            _hover={{ bgColor: "#f60" }}
            onClick={handleCreateNew}
            minW={"auto"}
          >
            + Add New Product
          </Button>
        </Flex>

        {/* Modal for Create/Edit */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {isEditMode ? "Edit Product" : "Create New Product"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ProductForm
                onClose={onClose}
                initialData={selectedProduct}
                isEdit={isEditMode}
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Delete Confirmation */}
        <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Are you sure you want to delete this product? This cannot be
                undone.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onDeleteClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={confirmDelete}
                isLoading={loadingDelete}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {loadingProducts ? (
          <Spinner size="xl" mt={6} />
        ) : errorProducts ? (
          <Text color="red.500" mt={6}>
            {errorProducts}
          </Text>
        ) : (
          <Box w="100%" px={8} py={6}>
            <Box
              bg="white"
              borderRadius="lg"
              boxShadow="sm"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.200"
            >
              {products.map((product, index) => (
                <Box
                  key={product._id}
                  _hover={{ bg: "gray.50" }}
                  cursor="pointer"
                  onClick={() => handleCardClick(product)}
                >
                  <Flex
                    align="center"
                    py={4}
                    px={6}
                    justify="space-between"
                    gap={6}
                  >
                    {/* Image */}
                    <Box flexShrink={0}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "6px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </Box>

                    {/* Product Details */}
                    <Flex
                      flex="1"
                      direction="column"
                      gap={1}
                      display={{ base: "none", md: "flex" }}
                    >
                      <Text fontWeight="bold" color="gray.800">
                        {product.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500" noOfLines={2}>
                        {product.description}
                      </Text>
                    </Flex>

                    {/* Price */}
                    <Box width="120px" textAlign="right">
                      <Text fontWeight="medium" color="orange.500">
                        ${product.price}
                      </Text>
                      <Text
                        fontSize="xs"
                        color="gray.400"
                        display={{ base: "none", md: "block" }}
                      >
                        In stock: {product.stock}
                      </Text>
                    </Box>

                    {/* Actions */}
                    <Flex gap={2}>
                      <Button
                        width={{ base: "35px", md: "auto" }}
                        size="sm"
                        fontSize={{ base: "10px", md: "auto" }}
                        color={"black"}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(product);
                        }}
                      >
                        Edit
                      </Button>
                      <IconButton
                        icon={<DeleteIcon />}
                        size="sm"
                        color={"black"}
                        onClick={(e) => handleDelete(e, product._id)}
                        isLoading={loadingDelete}
                        aria-label="Delete product"
                      />
                    </Flex>
                  </Flex>
                  {index < products.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Flex>
    </>
  );
}

export default DashProducts;
