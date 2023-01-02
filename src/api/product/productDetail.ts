import { IProduct } from "@/types/product";

export const getProduct = async():Promise<IProduct> =>
await fetch('https://m.shopping.friday.tw/mobileapi/api/product/7995418/detail?cid=419485')
.then(res => res.json())