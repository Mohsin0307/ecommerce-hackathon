'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Select, SelectContent, SelectItem } from '@radix-ui/react-select'


const ShoppingCart = () => {
    return (

        <><Select>
            <SelectContent>
                <SelectItem value="value">Label</SelectItem>
            </SelectContent>
        </Select><div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 py-8">
                {/* Left Section: Product Details */}
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell className="font-bold">Product</TableCell>
                                <TableCell className="font-bold">Price</TableCell>
                                <TableCell className="font-bold">Quantity</TableCell>
                                <TableCell className="font-bold">Total</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                {
                                    id: 1,
                                    name: "Leather Backpack",
                                    size: "L",
                                    color: "Black",
                                    price: 120,
                                    imgUrl: "https://via.placeholder.com/80/000000/FFFFFF?text=Backpack",
                                },
                                {
                                    id: 2,
                                    name: "Running Shoes",
                                    size: "10",
                                    color: "Blue",
                                    price: 80,
                                    imgUrl: "https://via.placeholder.com/80/0000FF/FFFFFF?text=Shoes",
                                },
                                {
                                    id: 3,
                                    name: "Smartwatch",
                                    size: "N/A",
                                    color: "Black",
                                    price: 150,
                                    imgUrl: "https://via.placeholder.com/80/333333/FFFFFF?text=Watch",
                                },
                                {
                                    id: 4,
                                    name: "Wireless Earbuds",
                                    size: "N/A",
                                    color: "White",
                                    price: 50,
                                    imgUrl: "https://via.placeholder.com/80/FFFFFF/000000?text=Earbuds",
                                },
                            ].map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={product.imgUrl}
                                                alt={product.name}
                                                className="w-20 h-20 object-cover rounded" />
                                            <div>
                                                <p className="font-medium">{product.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    Size: {product.size} | Color: {product.color}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>${product.price.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Input type="number" min="1" defaultValue="1" className="w-16" />
                                    </TableCell>
                                    <TableCell>${product.price.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div className="flex justify-between mt-4">
                        <Button variant="secondary">Update Cart</Button>
                        <Button variant="destructive">Clear Cart</Button>
                    </div>
                </div>

                {/* Right Section: Cart Totals */}
                <div className="w-full md:w-1/3">
                    <Card className="mb-6">
                        <CardHeader>
                            <h3 className="text-xl font-semibold">Cart Totals</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between mb-2">
                                <p>Subtotal:</p>
                                <p>$400.00</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p>Total:</p>
                                <p className="font-bold text-lg">$400.00</p>
                            </div>
                            <Button className="w-full">Proceed to Checkout</Button>
                        </CardContent>
                    </Card>

                    {/* Calculate Shipping */}
                    <Card>
                        <CardHeader>
                            <h3 className="text-xl font-semibold">Calculate Shipping</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="country">Country</Label>
                                    <Select value="country" defaultValue="">
                                        <SelectItem value="bangladesh">Bangladesh</SelectItem>
                                        <SelectItem value="usa">USA</SelectItem>
                                        <SelectItem value="uk">UK</SelectItem>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" placeholder="e.g., Dhaka" />
                                </div>
                                <div>
                                    <Label htmlFor="postal">Postal Code</Label>
                                    <Input id="postal" placeholder="e.g., 1000" />
                                </div>
                                <Button className="w-full">Calculate Shipping</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div></>
    );
  };
  
  export default ShoppingCart;