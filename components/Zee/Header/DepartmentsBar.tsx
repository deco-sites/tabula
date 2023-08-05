export default function DepartmentsBar() {
  return (
    <div class="flex justify-between w-full border-b border-gray-20 bg-gray-10 h-[40px]">
      <nav class="flex xs:max-lg:w-full">
        <ol class="flex row nowrap w-full divide-x divide-gray-20">
          <li class="grow xs:max-lg:w-1/3 lg:w-[140px]">ZeeDog</li>
          <li class="grow xs:max-lg:w-1/3 lg:w-[140px]">Kitchen</li>
          <li class="grow xs:max-lg:w-1/3 lg:w-[140px]">Human</li>
        </ol>
      </nav>
      <nav class="hidden lg:flex">
        <ol class="flex row nowrap w-full divide-x divide-gray-20">
          <li class="">Assinatura</li>
          <li class="">10% OFF na primeira compra</li>
          <li class="">Ganhe R$ 25</li>
        </ol>
      </nav>
    </div>
  );
}
