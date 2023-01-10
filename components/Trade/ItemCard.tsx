function ItemCard(): JSX.Element {
  return (
    <div
      className="max-w-[200px]   overflow-hidden  flex items-center flex-col font-roboto p-2 rounded-[10px]"
      style={{
        background: 'linear-gradient(180deg, #231941 0%, #181330 100%)',
        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.5)',
      }}
    >
      <img src="/images/trade.png" alt="" />
      <p className="text-md font-roboto text-white">$ 112</p>
      <div className="flex gap-2 p-2">
        <button
          type="button"
          className="bg-[#231841] px-4 py-1 rounded-lg border-none flex items-center justify-center cursor-pointer"
        >
          <img src="/icons/heart.svg" alt="" />
        </button>
        <button
          type="button"
          className="bg-[#231841] px-4 py-1 rounded-lg border-none cursor-pointer"
        >
          <img src="/icons/cart.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default ItemCard
