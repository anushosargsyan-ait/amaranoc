const Descreption = () => {
  return (
    <div className="border border-gray-200 rounded-[20px] p-8 bg-white shadow-sm text-[#333] text-[15px] font-sans">
      <div className="mb-8">
        <h3 className="text-[17px] font-bold text-black mb-3">
          Ընդհանուր Նկարագրություն
        </h3>
        <p className="leading-relaxed">
          Էլի՞ են ասել, որ դուք կրեատիվ զույգ եք: Դե բա ձեր պես կրեատիվներն էլ
          պիտի ընտրեին այս տարբերակը: Առանց այն էլ բոլորի հետաքրքրության
          կենտրոնում էիք, ամրագրելուց հետո ավելի եք լինելու:
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-[17px] font-bold text-black mb-3">
          Տնակում առկա է՝
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-1.5 ml-1">
          <li>Ջակուզի</li>
          <li>Շքեղ տեսարան դեպի քաղաք</li>
          <li>Բաց տաղավար</li>
          <li>Պատշգամբ</li>
          <li>BBQ սարք</li>
          <li>Սպասք</li>
          <li>Սուրճ պատրաստող սարք</li>
          <li>Միկրոալիքային վառարան</li>
          <li>Օդորակիչ</li>
          <li>Wi-fi</li>
          <li>Smart TV</li>
          <li>1 սենյակ</li>
          <li>Սանհանգույց</li>
          <li>Անկողնային պարագաներ</li>
          <li>Հիգիենայի պարագաներ</li>
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <p>Տնակը նախատեսված է 3 անձի համար:</p>
      </div>

      <div className="mb-8">
        <h3 className="text-[17px] font-bold text-black mb-3">
          Տնակի 1 օրվա արժեքն է՝
        </h3>
        <ul className="list-disc list-inside flex flex-col gap-1.5 ml-1">
          <li>Երկուշաբթի - հինգշաբթի 45000 դրամ</li>
          <li>Ուրբաթ - կիրակի 55000 դրամ</li>
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="text-[17px] font-bold text-black mb-2">
          Մուտքի և ելքի ժամանակացույց՝
        </h3>
        <div className="flex flex-col gap-1">
          <p>Մուտք՝ 14:00</p>
          <p>Ելք՝ 12:00</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-[17px] font-bold text-black">
          Ամրագրման կամ մանրամասների համար՝ գրեք կամ զանգահարեք մեզ։
        </h3>
      </div>
    </div>
  );
};

export default Descreption;
