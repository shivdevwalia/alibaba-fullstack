import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductAdmin,
  getProducts,
  updateProductAdmin,
} from "../../redux/actions";

function ProductForm({ onClose, initialData = null, isEdit = false }) {
  const [title, setTitle] = useState(initialData?.name || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [price, setPrice] = useState(initialData?.price || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [images, setImages] = useState(initialData?.images || [""]);
  const [stock, setStock] = useState(initialData?.stock || "");

  const dispatch = useDispatch();
  const loadingAdd = useSelector((state) => state.loadingAddProduct);
  const loadingUpdate = useSelector((state) => state.loadingUpdateProduct);

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name: title,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
      images: images.filter((img) => img.trim() !== ""),
    };

    if (isEdit && initialData?._id) {
      await dispatch(updateProductAdmin(initialData._id, productData));
    } else {
      await dispatch(addProductAdmin(productData));
    }
    await dispatch(getProducts());
    // Reset form and close modal
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImages([""]);
    setStock("");
    onClose?.();
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Category</FormLabel>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Stock Quantity</FormLabel>
          <Input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Images</FormLabel>
          {images.map((img, index) => (
            <Input
              key={index}
              placeholder={`Image URL ${index + 1}`}
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
              mb={2}
            />
          ))}
          <Button onClick={() => setImages([...images, ""])} size="sm">
            + Add Image
          </Button>
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isEdit ? loadingUpdate : loadingAdd}
        >
          {isEdit ? "Update" : "Create"}
        </Button>
      </VStack>
    </Box>
  );
}

export default ProductForm;
