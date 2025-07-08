const express = require("express");
const app = express();
const { connection } = require("./db");
const { userRouter } = require("./Routes/user.routes");
const { productRouter } = require("./Routes/product.routes");
const { cartRouter } = require("./Routes/cart.routes");
const { adminRouter } = require("./Routes/admin.routes");
const { orderRouter } = require("./Routes/order.routes");
const { contactRouter } = require("./Routes/contact.routes");
const { aboutUsRouter } = require("./Routes/aboutus.routes");

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "https://alibaba-fullstack.vercel.app",
  })
);

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/dashboard", adminRouter);
app.use("/orders", orderRouter);
app.use("/aboutus", aboutUsRouter);
app.use("/contact", contactRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err.message);
  }
  console.log("server is running");
});
