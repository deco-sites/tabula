import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons = "ArrowsPointingOut";

export type PriorityIcons =
  | "ZeeDog"
  | "HorizontalZeeDog"
  | "ZeeDogKitchen"
  | "ZeeDogHuman"
  | "HamburgerMenu"
  | "SearchMagnifyingGlass"
  | "WishlistHeart"
  | "MyAccountAvatar"
  | "ShoppingCart"
  | "ShippingTruck"
  | "SubscriptionClock"
  | "PercentageCircle"
  | "AthenaChatBubble"
  | "CloseCross";

interface GeneralIconProps extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/sprites.svg`.
   *
   * Example: <Icon id="ZeeDog" />
   */
  id: AvailableIcons;
  size?: number;
}

interface PriorityIconProps extends JSX.SVGAttributes<SVGSVGElement> {
  id: PriorityIcons;
  size?: number;
}

export default function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }:
    GeneralIconProps,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export function PriorityIcon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }:
    PriorityIconProps,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites-priority.svg#${id}`)} />
    </svg>
  );
}
