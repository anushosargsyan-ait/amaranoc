// 1. Ընդունում ենք onMapOpen prop-ը Main.jsx-ից
const MapsData = ({ onMapOpen }) => {
  return (
    <div className="ml-10 flex items-center gap-4 mt-5">
      {/* 2. Ավելացնում ենք onClick={onMapOpen} */}
      <div 
        onClick={onMapOpen}
        className="font-sans flex items-center border border-black w-[110px] h-[40px] rounded-[22px] cursor-pointer px-4 justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="ml-2">Քարտեզ</span>
        <img
          src="https://png.pngtree.com/png-vector/20190409/ourmid/pngtree-map-icon-vector-illustration-in-line-style-for-any-purpose-png-image_924190.jpg"
          alt="map"
          className="w-[25px] h-[25px]"
        />
      </div>

      <div className="flex items-center justify-center border border-black w-[44px] h-[40px] rounded-[22px] cursor-pointer hover:bg-gray-50 transition-colors">
        <img
          className="w-[25px] h-[25px]"
          src="https://media.istockphoto.com/id/1212381977/vector/simple-flat-design-calendar-icon.jpg?s=612x612&w=0&k=20&c=lkzyW-wiFd-uHLJ9tRkLYzWA5joCCuJ4d_tifuHdANs="
          alt="calendar"
        />
      </div>
    </div>
  );
};

export default MapsData;