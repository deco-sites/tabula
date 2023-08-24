import { PriorityIcon } from "deco-sites/tabula/components/Zee/ui/Icon.tsx";

export default function DepartmentsBar() {
  return (
    <div class="w-full lg:border-b border-gray-20 bg-gray-10">
      <div className="max-container flex justify-between h-[40px]">
        <nav class="flex xs:max-lg:w-full">
          <ol class="flex row nowrap w-full divide-x divide-gray-20">
            <li class="flex justify-center items-center grow xs:max-lg:w-1/3 lg:w-[140px] bg-white border-t-2 border-black">
              <a href="/" class="w-[85px] h-[22px]">
                <PriorityIcon
                  id="HorizontalZeeDog"
                  width={"100%"}
                  height={"100%"}
                  fill="#555"
                />
              </a>
            </li>
            <li class="flex justify-center items-center grow xs:max-lg:w-1/3 lg:w-[140px] border-b">
              <a href="/" class="w-[90px] h-[27px]">
                <PriorityIcon
                  id="ZeeDogKitchen"
                  width={"100%"}
                  height={"100%"}
                  fill="#555"
                />
              </a>
            </li>
            <li class="flex justify-center items-center grow xs:max-lg:w-1/3 lg:w-[140px] border-b">
              <a href="/" class="w-[85px] h-[25px]">
                <PriorityIcon
                  id="ZeeDogHuman"
                  width={"100%"}
                  height={"100%"}
                  fill="#555"
                />
              </a>
            </li>
          </ol>
        </nav>
        <nav class="hidden lg:flex">
          <ol class="flex row nowrap w-full divide-x divide-gray-20">
            <li class="">
              <a href="/" class="w-[85px] h-[25px]">
                <PriorityIcon
                  id="SubscriptionClock"
                  width={"100%"}
                  height={"100%"}
                  fill="#555"
                  class="inline-block"
                />
                Assinatura
              </a>
            </li>
            <li class="">10% OFF na primeira compra</li>
            <li class="">Ganhe R$ 25</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
