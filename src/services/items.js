import { productos } from "../data/productos";

// const getAll = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(productos);
//     }, [500]);
//   });
// };

const get = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.find((elem) => elem.id.toString() === id));
    }, [100]);
  });
};

const add = (itemDetail) => {};

export const itemService = { get, add };
