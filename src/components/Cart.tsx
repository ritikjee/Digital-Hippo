import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Cart() {
  const itemCount: number = 0;
  const fee = 3.09;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>
            Cart{"("}
            {itemCount}
            {")"}
          </SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">cart items</div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span className="font-medium">{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span className="font-medium">{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span className="font-medium">{formatPrice(fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTitle asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full text-white",
                    })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTitle>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image src="/hippo-empty-cart.png" fill alt="empty cart" />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  className: "text-sm text-muted-foreground",
                  size: "sm",
                })}
              >
                Add items to your cart to open a checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
